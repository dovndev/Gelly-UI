"use client";
import React from "react";
import Link from "next/link";
import {
  GellyButton, 
  GellyModal, 
  GellyToast, 
  GellyTabs, 
  GellyCard, 
  GellyDropdown, 
  GellyTooltip, 
  GellyAvatar, 
  GellyInput, 
  GellySwitch, 
  GellyCheckbox, 
  GellyTextarea, 
  GellyRadio, 
  GellySelect, 
  GellyBadge, 
  GellyProgress, 
  GellyLoader, 
  GellySlider, 
  GellyDivider, 
  GellyBreadcrumbs, 
  GellyAccordion, 
  GellyHeroBanner
} from "@gelly-ui/core";

export default function Showcase() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Navigation Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-4">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors">
            <span className="text-xl font-bold">← Gelly UI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-white/80">Component Showcase</span>
            <Link href="https://github.com/yourusername/gelly-ui" target="_blank">
              <GellyButton>GitHub</GellyButton>
            </Link>
          </div>
        </div>
      </div>

      <GellyHeroBanner
        title="Gelly UI Components"
        subtitle="Explore all glassmorphic React components"
      >
        <Link href="/">
          <GellyButton>← Back to Home</GellyButton>
        </Link>
      </GellyHeroBanner>

      <div className="flex flex-col gap-8 p-4">
        {/* Buttons & Actions */}
        <GellyCard className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Buttons & Actions</h2>
          <div className="flex gap-4 flex-wrap">
            <GellyButton onClick={() => setModalOpen(true)}>Open Modal</GellyButton>
            <GellyButton onClick={() => setToastOpen(true)}>Show Toast</GellyButton>
            <GellyButton>Primary Button</GellyButton>
          </div>
        </GellyCard>

        {/* Gelly Modal Example */}
        <GellyModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Example Modal</h2>
            <p className="text-white/80 mb-6">This is a beautiful glassmorphic modal with backdrop blur.</p>
            <div className="flex gap-3">
              <GellyButton onClick={() => setModalOpen(false)}>Close</GellyButton>
              <GellyButton onClick={() => setModalOpen(false)}>Save</GellyButton>
            </div>
          </div>
        </GellyModal>

        {/* Gelly Toast Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyToast</h2>
          <GellyButton onClick={() => setToastOpen(true)}>Show Toast</GellyButton>
          <GellyToast
            show={toastOpen}
            message="This is a glass toast notification!"
            onClose={() => setToastOpen(false)}
          />
        </GellyCard>

        {/* Gelly Tabs Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyTabs</h2>
          <GellyTabs
            tabs={["Overview", "Features", "Pricing"]}
            value={tab}
            onChange={setTab}
          />
          <div className="mt-4 text-white">
            {tab === 0 && <div>Overview content...</div>}
            {tab === 1 && <div>Features content...</div>}
            {tab === 2 && <div>Pricing content...</div>}
          </div>
        </GellyCard>

        {/* Gelly Dropdown Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyDropdown</h2>
          <GellyDropdown
            trigger={<GellyButton>Open Menu</GellyButton>}
          >
            <div className="space-y-1">
              <button 
                className="w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded transition-colors"
                onClick={() => alert("Profile clicked")}
              >
                Profile
              </button>
              <button 
                className="w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded transition-colors"
                onClick={() => alert("Settings clicked")}
              >
                Settings
              </button>
              <button 
                className="w-full text-left px-3 py-2 text-white hover:bg-white/10 rounded transition-colors"
                onClick={() => alert("Logout clicked")}
              >
                Logout
              </button>
            </div>
          </GellyDropdown>
        </GellyCard>

        {/* Gelly Tooltip Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyTooltip</h2>
          <GellyTooltip content="This is a tooltip!">
            <GellyButton>Hover me</GellyButton>
          </GellyTooltip>
        </GellyCard>

        {/* Gelly Avatar Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyAvatar</h2>
          <div className="flex gap-6 items-center">
            <GellyAvatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <GellyAvatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            <GellyAvatar src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" />
          </div>
        </GellyCard>

        {/* Gelly Input Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyInput</h2>
          <GellyInput label="Your Name" placeholder="Enter your name..." />
        </GellyCard>

        {/* Gelly Switch Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellySwitch</h2>
          <GellySwitch
            checked={tab === 1}
            onChange={(v: boolean) => setTab(v ? 1 : 0)}
            label="Toggle Tab 1"
          />
        </GellyCard>

        {/* Gelly Checkbox Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyCheckbox</h2>
          <GellyCheckbox 
            label="Accept Terms" 
            checked={tab === 2} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTab(e.target.checked ? 2 : 0)} 
          />
        </GellyCard>

        {/* Gelly Textarea Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyTextarea</h2>
          <GellyTextarea label="Message" placeholder="Type your message..." rows={4} />
        </GellyCard>

        {/* Gelly Radio Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyRadio</h2>
          <div className="flex gap-6">
            <GellyRadio
              label="Option A"
              checked={tab === 3}
              onChange={() => setTab(3)}
              name="glass-radio-demo"
            />
            <GellyRadio
              label="Option B"
              checked={tab === 4}
              onChange={() => setTab(4)}
              name="glass-radio-demo"
            />
          </div>
        </GellyCard>

        {/* Gelly Select Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellySelect</h2>
          <GellySelect
            label="Choose a fruit"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
              { label: "Orange", value: "orange" },
            ]}
          />
        </GellyCard>

        {/* Gelly Badge Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyBadge</h2>
          <div className="flex gap-4 flex-wrap">
            <GellyBadge color="blue">Info</GellyBadge>
            <GellyBadge color="green">Success</GellyBadge>
            <GellyBadge color="red">Error</GellyBadge>
            <GellyBadge color="yellow">Warning</GellyBadge>
            <GellyBadge color="purple">New</GellyBadge>
            <GellyBadge color="gray">Neutral</GellyBadge>
          </div>
        </GellyCard>

        {/* Gelly Progress Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyProgress</h2>
          <GellyProgress value={60} color="blue" className="mb-2" />
          <GellyProgress value={35} color="green" className="mb-2" />
          <GellyProgress value={85} color="red" />
        </GellyCard>

        {/* Gelly Loader Example */}
        <GellyCard className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyLoader</h2>
          <div className="flex gap-6">
            <GellyLoader size={40} color="blue" />
            <GellyLoader size={32} color="green" />
            <GellyLoader size={48} color="red" />
            <GellyLoader size={40} color="purple" />
          </div>
        </GellyCard>

        {/* Gelly Slider Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellySlider</h2>
          <GellySlider label="Volume" min={0} max={100} defaultValue={50} />
        </GellyCard>

        {/* Gelly Divider Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyDivider</h2>
          <div>
            <div className="mb-2 text-white">Section 1</div>
            <GellyDivider />
            <div className="mt-2 text-white">Section 2</div>
          </div>
        </GellyCard>

        {/* Gelly Breadcrumbs Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyBreadcrumbs</h2>
          <GellyBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "GellyBreadcrumbs" },
            ]}
          />
        </GellyCard>

        {/* Gelly Accordion Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-white">GellyAccordion</h2>
          <GellyAccordion
            items={[
              { title: "Section 1", content: "This is the content for section 1." },
              { title: "Section 2", content: "This is the content for section 2." },
              { title: "Section 3", content: "This is the content for section 3." },
            ]}
          />
        </GellyCard>

        {/* Basic Footer */}
        <div className="text-center py-8 text-white/60 border-t border-white/20">
          <p>Gelly UI Component Showcase</p>
        </div>
      </div>
    </div>
  );
}