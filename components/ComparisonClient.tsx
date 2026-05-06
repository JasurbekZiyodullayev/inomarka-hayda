"use client";

import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { Car } from "@/data/cars";

const CAR1_COLOR = "#6366f1";
const CAR2_COLOR = "#f59e0b";

function normalize(value: number, max: number) {
  return Math.round((value / max) * 100);
}
function invertNormalize(value: number, min: number, max: number) {
  return Math.round(((max - value) / (max - min)) * 100);
}

function buildRadarData(car1: Car, car2: Car) {
  return [
    {
      subject: "Quvvat",
      [car1.model]: normalize(car1.specs.horsePower, 450),
      [car2.model]: normalize(car2.specs.horsePower, 450),
    },
    {
      subject: "Tezlik",
      [car1.model]: normalize(car1.specs.topSpeed, 250),
      [car2.model]: normalize(car2.specs.topSpeed, 250),
    },
    {
      subject: "Tejamkorlik",
      [car1.model]: invertNormalize(car1.specs.fuelConsumption, 6.8, 14.8),
      [car2.model]: invertNormalize(car2.specs.fuelConsumption, 6.8, 14.8),
    },
    {
      subject: "Yengillik",
      [car1.model]: invertNormalize(car1.specs.weight, 1218, 2550),
      [car2.model]: invertNormalize(car2.specs.weight, 1218, 2550),
    },
    {
      subject: "Dvigatel",
      [car1.model]: normalize(car1.specs.engineCC, 5038),
      [car2.model]: normalize(car2.specs.engineCC, 5038),
    },
  ];
}

function buildBarData(car1: Car, car2: Car) {
  return [
    { name: "Quvvat (HP)", [car1.model]: car1.specs.horsePower, [car2.model]: car2.specs.horsePower },
    { name: "Tezlik (km/h)", [car1.model]: car1.specs.topSpeed, [car2.model]: car2.specs.topSpeed },
    { name: "Yoqilg'i (L/100km)", [car1.model]: car1.specs.fuelConsumption, [car2.model]: car2.specs.fuelConsumption },
    { name: "Og'irlik (100 kg)", [car1.model]: Math.round(car1.specs.weight / 100), [car2.model]: Math.round(car2.specs.weight / 100) },
  ];
}

const specRows = [
  { label: "Quvvat", key: "horsePower" as const, unit: "HP" },
  { label: "Max tezlik", key: "topSpeed" as const, unit: "km/h" },
  { label: "Dvigatel", key: "engineCC" as const, unit: "cc", format: (v: number) => v.toLocaleString() },
  { label: "Yoqilg'i sarfi", key: "fuelConsumption" as const, unit: "L/100km" },
  { label: "O'rindiqlar", key: "seats" as const, unit: "" },
  { label: "Eshiklar", key: "doors" as const, unit: "" },
  { label: "Og'irlik", key: "weight" as const, unit: "kg", format: (v: number) => v.toLocaleString() },
];

export default function ComparisonClient({ car1, car2 }: { car1: Car; car2: Car }) {
  const radarData = buildRadarData(car1, car2);
  const barData = buildBarData(car1, car2);

  return (
    <div className="space-y-6">
      {/* Radar chart */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] px-4 py-6">
        <h3 className="text-base font-bold text-[#1a202c] mb-4 px-2">Umumiy taqqoslash</h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#64748b" }} />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <Radar name={car1.model} dataKey={car1.model} stroke={CAR1_COLOR} fill={CAR1_COLOR} fillOpacity={0.15} strokeWidth={2} />
            <Radar name={car2.model} dataKey={car2.model} stroke={CAR2_COLOR} fill={CAR2_COLOR} fillOpacity={0.15} strokeWidth={2} />
            <Legend wrapperStyle={{ fontSize: 13 }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] px-4 py-6">
        <h3 className="text-base font-bold text-[#1a202c] mb-4 px-2">Aniq qiymatlar</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={barData} barGap={4} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f4f8" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
              cursor={{ fill: "#f8fafc" }}
            />
            <Legend wrapperStyle={{ fontSize: 13 }} />
            <Bar dataKey={car1.model} fill={CAR1_COLOR} radius={[4, 4, 0, 0]} />
            <Bar dataKey={car2.model} fill={CAR2_COLOR} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Specs table */}
      <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
        <h3 className="text-base font-bold text-[#1a202c] px-6 py-4 border-b border-[#f0f4f8]">Texnik xususiyatlar</h3>
        <div className="divide-y divide-[#f0f4f8]">
          {specRows.map((row) => {
            const v1 = car1.specs[row.key] as number;
            const v2 = car2.specs[row.key] as number;
            const fmt = row.format ?? ((v: number) => v);
            const better1 =
              row.key === "fuelConsumption" || row.key === "weight" ? v1 < v2 : v1 > v2;
            const better2 =
              row.key === "fuelConsumption" || row.key === "weight" ? v2 < v1 : v2 > v1;
            return (
              <div key={row.key} className="grid grid-cols-3 px-6 py-3 items-center">
                <span className="text-[13px] text-[#64748b]">{row.label}</span>
                <span className={`text-center text-sm font-semibold ${better1 ? "text-indigo-600" : "text-[#1a202c]"}`}>
                  {fmt(v1)}{row.unit && <span className="text-[11px] font-normal text-[#94a3b8] ml-1">{row.unit}</span>}
                </span>
                <span className={`text-center text-sm font-semibold ${better2 ? "text-amber-500" : "text-[#1a202c]"}`}>
                  {fmt(v2)}{row.unit && <span className="text-[11px] font-normal text-[#94a3b8] ml-1">{row.unit}</span>}
                </span>
              </div>
            );
          })}
        </div>
        {/* Legend */}
        <div className="grid grid-cols-3 px-6 py-3 border-t border-[#f0f4f8] bg-[#f8fafc]">
          <span />
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="text-[12px] font-medium text-indigo-600">{car1.brand} {car1.model}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-[12px] font-medium text-amber-500">{car2.brand} {car2.model}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
