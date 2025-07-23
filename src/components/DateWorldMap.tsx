'use client';

import React, { useState, useEffect, useMemo, useRef } from "react";
import { geoMercator, geoPath, GeoProjection } from "d3-geo";
import { zoom, zoomIdentity } from "d3-zoom";
import { select, Selection } from "d3-selection";
import { feature } from "topojson-client";
import worldTopo from "world-atlas/countries-110m.json";
import { DATE_VARIETIES, DateVariety } from "@/data/datesData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const mapCountryName = (c: string) => {
  if (c === 'USA' || c === 'United States') 
    return 'United States of America';
  return c;
};

export default function DateWorldMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | number | null>(null);

  const height = 450;
  const width = 800;

  // load TopoJSON → GeoJSON features
  const worldFeatures = useMemo(() => {
    return (feature(worldTopo as any, (worldTopo as any).objects.countries)
      .features as any[]
    ).map((f) => ({
      ...f,
      properties: {
        ...(f.properties as any),
        NAME: (f.properties as any).name || (f.properties as any).NAME,
      },
    }));
  }, []);

  // which countries have dates
  const highlightedSet = useMemo(
    () => new Set(DATE_VARIETIES.map((d) => mapCountryName(d.country))),
    []
  );
  const highlightedList = useMemo(() => Array.from(highlightedSet), [highlightedSet]);

  // variants panel content
  const variants: DateVariety[] = useMemo(() => {
    if (!selectedCountry) return [];
    return DATE_VARIETIES.filter(
      (d) => mapCountryName(d.country) === selectedCountry
    );
  }, [selectedCountry]);

  // projection + path
  const projection = useMemo<GeoProjection>(
    () => geoMercator().scale(width / 6).translate([width / 2, height / 2]),
    []
  );
  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection]);

  // d3 zoom
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;
    const svg = select(svgRef.current) as Selection<SVGSVGElement, unknown, null, undefined>;
    const g   = select(gRef.current)  as Selection<SVGGElement, unknown, null, undefined>;

    const zm = zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .translateExtent([[0, 0], [width, height]])
      .filter((event) => event.type !== "wheel")
      .on("zoom", (event) => {
        g.attr("transform", event.transform.toString());
      });

    svg.call(zm as any);

    // initial 2× centered
    const initialTransform = zoomIdentity
      .translate(width / 2, height / 2)
      .scale(2)
      .translate(-width / 2, -height / 2);

    svg.call(zm.transform as any, initialTransform);
  }, [width, height]);

  // mobile prev/next
  const prevCountry = () => {
    if (!selectedCountry) return;
    const idx = highlightedList.indexOf(selectedCountry);
    setSelectedCountry(highlightedList[(idx - 1 + highlightedList.length) % highlightedList.length]);
    setTabIndex(0);
  };
  const nextCountry = () => {
    if (!selectedCountry) return;
    const idx = highlightedList.indexOf(selectedCountry);
    setSelectedCountry(highlightedList[(idx + 1) % highlightedList.length]);
    setTabIndex(0);
  };

  // auto-select first
  useEffect(() => {
    if (!selectedCountry && highlightedList.length) {
      setSelectedCountry(highlightedList[0]);
    }
  }, [highlightedList, selectedCountry]);

  return (
    <div className="max-w-5xl pt-10 mx-[20vw]">
      {/* Desktop/Tablet */}
      <div className="hidden w-[60vw] md:flex">
        <div className="flex-1">
          <svg
            ref={svgRef}
            width="100%"
            viewBox={`0 0 ${width} ${height}`}
            className="bg-[var(--off-white)]"
            style={{ touchAction: "none" }}
          >
            <g ref={gRef}>
              {worldFeatures.map((feat) => {
                const name = feat.properties.NAME as string;
                const isActive = highlightedSet.has(name);
                const isHovered = hoveredId === feat.id;
                const fillColor = isHovered
                  ? "var(--orange-light)"
                  : isActive
                    ? "var(--orange-primary)"
                    : "var(--orange-light)";
                return (
                  <path
                    key={feat.id}
                    d={pathGenerator(feat) || undefined}
                    fill={fillColor}
                    stroke="#fff"
                    strokeWidth={0.3}
                    style={{
                      cursor: isActive ? "pointer" : "default",
                      transition: "fill 0.2s",
                    }}
                    onMouseEnter={() => setHoveredId(feat.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => {
                      if (isActive) {
                        setSelectedCountry(name);
                        setTabIndex(0);
                      }
                    }}
                  />
                );
              })}
            </g>

            {/* — indicator drawn inside the SVG — */}
            <g pointerEvents="none">
              {/* semi-opaque white box */}
              <rect
                x={width - 110}
                y={height - 30}
                width={100}
                height={20}
                rx={4}
                fill="#fff"
                fillOpacity={0.75}
              />
              {/* label */}
              <text
                x={width - 60}
                y={height - 15}
                fontSize={12}
                fill="#333"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                Drag to pan
              </text>
            </g>
          </svg>
        </div>
        {selectedCountry && variants.length > 0 && (
          <div className="w-1/3 ml-6 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{selectedCountry}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {variants.map((v, i) => (
                <button
                  key={`tab-${v.name}-${i}`}
                  onClick={() => setTabIndex(i)}
                  className={`px-3 py-1 rounded-full transition whitespace-nowrap ${
                    i === tabIndex
                      ? "bg-[var(--orange-primary)] text-white"
                      : "bg-[var(--background)] text-gray-800"
                  }`}
                >
                  {v.name}
                </button>
              ))}
            </div>
            <div className="space-y-2 text-left">
              <p className="italic text-gray-600">
                Origin: {variants[tabIndex].origin}
              </p>
              <p className="font-semibold">{variants[tabIndex].excerpt}</p>
              <p>{variants[tabIndex].description}</p>
              <p>
                <strong>Flavor Profile:</strong> {variants[tabIndex].flavor}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile */}
      {selectedCountry && variants.length > 0 && (
        <div className="block md:hidden">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg
                width={300}
                height={200}
                viewBox={`0 0 ${width} ${height}`}
                className="bg-[var(--off-white)]"
              >
                <g>
                  {worldFeatures.map((feat) => {
                    const name = feat.properties.NAME as string;
                    const isSelected = name === selectedCountry;
                    const fillColor = isSelected
                      ? "var(--orange-primary)"
                      : "var(--orange-light)";
                    return (
                      <path
                        key={feat.id}
                        d={pathGenerator(feat) || undefined}
                        fill={fillColor}
                        stroke="#fff"
                        strokeWidth={0.3}
                      />
                    );
                  })}
                </g>

                {/* same pan badge inside mobile SVG */}
                <g pointerEvents="none">
                  <rect
                    x={width - 110}
                    y={height - 30}
                    width={100}
                    height={20}
                    rx={4}
                    fill="#fff"
                    fillOpacity={0.75}
                  />
                  <text
                    x={width - 60}
                    y={height - 15}
                    fontSize={12}
                    fill="#333"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                  >
                    Drag to pan
                  </text>
                </g>
              </svg>

              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2"
                onClick={prevCountry}
              >
                <ChevronLeft size={32} />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
                onClick={nextCountry}
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <div className="mt-4 bg-white p-4 rounded-lg shadow-md w-full text-left">
              <div className="flex flex-wrap gap-2 mb-4">
                {variants.map((v, i) => (
                  <button
                    key={`mobile-tab-${v.name}-${i}`}
                    onClick={() => setTabIndex(i)}
                    className={`px-3 py-1 rounded-full whitespace-nowrap ${
                      i === tabIndex
                        ? "bg-[var(--orange-primary)] text-white"
                        : "bg-[var(--background)] text-gray-800"
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <p className="italic text-gray-600">
                  Origin: {variants[tabIndex].origin}
                </p>
                <p className="font-semibold">{variants[tabIndex].excerpt}</p>
                <p>{variants[tabIndex].description}</p>
                <p>
                  <strong>Flavor Profile:</strong> {variants[tabIndex].flavor}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

