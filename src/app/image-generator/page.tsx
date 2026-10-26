"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Sliders,
  Copy,
  Check,
  Download,
  Info,
  Maximize2,
  Wand2,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { BRAND_NAME, FOUNDER_NAME } from "@/lib/utils";

const STYLES = [
  { id: "photoreal", label: "Editorial Photorealism", promptSnippet: "ultra-realistic 8k studio photography, high dynamic range, Hasselblad medium format, natural skin texture" },
  { id: "minimal-3d", label: "Minimalist 3D Spatial", promptSnippet: "clean 3D spatial render, soft clay materials, subtle orange ambient bounce light, octane render, modern design aesthetic" },
  { id: "cyber-agent", label: "Cybernetic AI Agent", promptSnippet: "sleek autonomous AI agent interface, holographic nodes, futuristic subtle amber luminescence, depth of field" },
  { id: "corporate", label: "Modern Tech Executive", promptSnippet: "professional executive studio portrait, crisp navy blazer, confident warm expression, neutral warm off-white studio background" },
];

const ASPECT_RATIOS = [
  { id: "1:1", label: "1:1 Square (1024×1024)", class: "aspect-square" },
  { id: "16:9", label: "16:9 Landscape (1920×1080)", class: "aspect-video" },
  { id: "9:16", label: "9:16 Story / Mobile (1080×1920)", class: "aspect-[9/16]" },
  { id: "4:5", label: "4:5 Portrait (1080×1350)", class: "aspect-[4/5]" },
];

export default function ImageGeneratorPage() {
  const [subject, setSubject] = useState("A young Pakistani AI systems architect smiling in a modern design studio with subtle orange ambient light");
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0].id);
  const [selectedRatio, setSelectedRatio] = useState(ASPECT_RATIOS[3].id);
  const [negativePrompt, setNegativePrompt] = useState("blurry, distorted facial features, plastic skin, oversaturated, low quality, artifacts, watermark");
  const [copied, setCopied] = useState(false);

  // Compile prompt
  const activeStyleObj = STYLES.find((s) => s.id === selectedStyle) || STYLES[0];
  const compiledPrompt = `${subject.trim()}, ${activeStyleObj.promptSnippet} --ar ${selectedRatio.replace(":", "-")} --v 6.1`;

  const handleCopy = () => {
    navigator.clipboard.writeText(compiledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100/80 text-orange-700 text-xs font-semibold">
          <Wand2 className="w-3.5 h-3.5" />
          <span>Interactive AI Studio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
          AI Prompt & Studio Composer.
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
          Craft production-grade visual prompts with calibrated aspect ratios, lighting parameters, and negative filters for Flux, Midjourney, and Stable Diffusion.
        </p>
      </div>

      {/* Main Studio Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-3xl bg-white border border-gray-200/80 shadow-soft p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-neutral-900 border-b border-gray-100 pb-3">
              Prompt Generation Parameters
            </h2>

            {/* Subject Input */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-2">
                1. Core Subject & Composition
              </label>
              <textarea
                rows={3}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Describe your subject, clothing, environment, and mood..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Style Presets */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-2">
                2. Visual Aesthetic Preset
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STYLES.map((style) => (
                  <button
                    type="button"
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-3 rounded-2xl text-xs font-medium text-left border transition-all ${
                      selectedStyle === style.id
                        ? "bg-orange-50 border-orange-500 text-orange-950 font-bold shadow-sm"
                        : "bg-white hover:bg-gray-50 border-gray-200 text-neutral-700"
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-2">
                3. Canvas Aspect Ratio
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ASPECT_RATIOS.map((ratio) => (
                  <button
                    type="button"
                    key={ratio.id}
                    onClick={() => setSelectedRatio(ratio.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedRatio === ratio.id
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "bg-white hover:bg-gray-50 border-gray-200 text-neutral-700"
                    }`}
                  >
                    {ratio.id}
                  </button>
                ))}
              </div>
            </div>

            {/* Negative Prompt */}
            <div>
              <label className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-2">
                4. Negative Filter (Tokens to Avoid)
              </label>
              <input
                type="text"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs text-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Compiled Output & Visual Frame */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-3xl bg-white border border-gray-200/80 shadow-card p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                Compiled Output Prompt
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-sm transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Full Prompt"}</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-gray-900 text-neutral-200 font-mono text-xs leading-relaxed break-words select-all">
              {compiledPrompt}
            </div>

            {/* Canvas Ratio Simulation Frame */}
            <div className="pt-2">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block mb-3">
                Frame Preview ({selectedRatio})
              </span>
              <div className="bg-orange-50/60 rounded-2xl p-4 border border-dashed border-orange-300 flex items-center justify-center">
                <div
                  className={`w-full max-w-[240px] rounded-xl bg-gradient-to-tr from-orange-400 via-amber-300 to-orange-200 shadow-md flex flex-col items-center justify-center p-4 text-center ${
                    selectedRatio === "1:1"
                      ? "aspect-square"
                      : selectedRatio === "16:9"
                      ? "aspect-video"
                      : selectedRatio === "9:16"
                      ? "aspect-[9/16] max-w-[160px]"
                      : "aspect-[4/5] max-w-[200px]"
                  }`}
                >
                  <Sparkles className="w-6 h-6 text-white mb-2 drop-shadow" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider drop-shadow">
                    {activeStyleObj.label}
                  </span>
                  <span className="text-[10px] text-orange-950/80 font-mono mt-1">
                    {selectedRatio} Frame
                  </span>
                </div>
              </div>
            </div>

            {/* Transparent Backend Note */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-900 space-y-1">
              <div className="flex items-center gap-1.5 font-bold">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Zero-Cost Architectural Transparency</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                To comply with Digizier&apos;s Zero-Load Free-Tier architecture and avoid third-party GPU bills, this studio compiles production prompts for direct execution in Midjourney, DALL-E, or local Stable Diffusion WebUI. Custom enterprise API integrations (Replicate / Runway / ComfyUI) can be deployed upon client request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
