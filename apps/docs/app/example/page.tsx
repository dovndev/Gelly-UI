"use client";
import React from "react";
import {
  GlassButton, GlassModal, GlassToast, GlassTabs, GlassCard, GlassDropdown, GlassTooltip, GlassAvatar, GlassInput, GlassSwitch, GlassCheckbox, GlassTextarea, GlassRadio, GlassSelect, GlassBadge, GlassProgress, GlassLoader, GlassSlider, GlassDivider, GlassBreadcrumbs, GlassStepper, GlassTabsBar, GlassAccordion, GlassTimeline, GlassAvatar1, GlassNavbar, GlassSidebar, GlassPopover, GlassNotificationBell, GlassCalendar, GlassChatBubble, GlassFileUploader, GlassPricingTable, GlassHeroBanner, GlassNotificationCenter, GlassCardCarousel, GlassSearchBar, GlassFooter, GlassCardStack, GlassBadgePill
} from "@glass-ui/core";

export default function Showcase() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [date, setDate] = React.useState("2024-06-23");
  const [search, setSearch] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <GlassHeroBanner
        title="Welcome to Glass UI"
        subtitle="Beautiful glassmorphic React components"
      >
        <GlassButton>Get Started</GlassButton>
      </GlassHeroBanner>

      <GlassNavbar
        links={[
          { label: "Home", href: "#", active: true },
          { label: "Docs", href: "#docs" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ]}
        className="my-8"
      />

      <div className="flex flex-col gap-8">
        {/* Glass Button Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassButton</h2>
          <GlassButton onClick={() => setModalOpen(true)}>Open Modal</GlassButton>
        </GlassCard>

        {/* Glass Modal Example */}
        <GlassModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="text-black">
            <h3 className="text-lg font-bold mb-2">Glass Modal</h3>
            <p>This is a beautiful animated glass modal!</p>
            <GlassButton className="mt-4" onClick={() => setModalOpen(false)}>
              Close
            </GlassButton>
          </div>
        </GlassModal>

        {/* Glass Toast Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassToast</h2>
          <GlassButton onClick={() => setToastOpen(true)}>Show Toast</GlassButton>
          <GlassToast
            show={toastOpen}
            message="This is a glass toast notification!"
            onClose={() => setToastOpen(false)}
          />
        </GlassCard>

        {/* Glass Tabs Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassTabs</h2>
          <GlassTabs
            tabs={["Overview", "Features", "Pricing"]}
            value={tab}
            onChange={setTab}
          />
          <div className="mt-4">
            {tab === 0 && <div>Overview content...</div>}
            {tab === 1 && <div>Features content...</div>}
            {tab === 2 && <div>Pricing content...</div>}
          </div>
        </GlassCard>

        {/* Glass Dropdown Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassDropdown</h2>
          <GlassDropdown
            label="Open Menu"
            items={[
              { label: "Profile", onClick: () => alert("Profile clicked") },
              { label: "Settings", onClick: () => alert("Settings clicked") },
              { label: "Logout", onClick: () => alert("Logout clicked") },
            ]}
          />
        </GlassCard>

        {/* Glass Tooltip Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassTooltip</h2>
          <GlassTooltip content="This is a tooltip!">
            <GlassButton>Hover me</GlassButton>
          </GlassTooltip>
        </GlassCard>

        {/* Glass Avatar Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassAvatar</h2>
          <div className="flex gap-6 items-center">
            <GlassAvatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <GlassAvatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            <GlassAvatar src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" />
            <GlassAvatar1 alt="A">A</GlassAvatar1>
            <GlassAvatar1 size={32}>👾</GlassAvatar1>
          </div>
        </GlassCard>

        {/* Glass Input Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassInput</h2>
          <GlassInput label="Your Name" placeholder="Enter your name..." />
        </GlassCard>

        {/* Glass Switch Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassSwitch</h2>
          <GlassSwitch
            checked={tab === 1}
            onChange={v => setTab(v ? 1 : 0)}
            label="Toggle Tab 1"
          />
        </GlassCard>

        {/* Glass Checkbox Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassCheckbox</h2>
          <GlassCheckbox label="Accept Terms" checked={tab === 2} onChange={e => setTab(e.target.checked ? 2 : 0)} />
        </GlassCard>

        {/* Glass Textarea Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassTextarea</h2>
          <GlassTextarea label="Message" placeholder="Type your message..." rows={4} />
        </GlassCard>

        {/* Glass Radio Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassRadio</h2>
          <div className="flex gap-6">
            <GlassRadio
              label="Option A"
              checked={tab === 3}
              onChange={() => setTab(3)}
              name="glass-radio-demo"
            />
            <GlassRadio
              label="Option B"
              checked={tab === 4}
              onChange={() => setTab(4)}
              name="glass-radio-demo"
            />
          </div>
        </GlassCard>

        {/* Glass Select Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassSelect</h2>
          <GlassSelect
            label="Choose a fruit"
            options={[
              { label: "Apple", value: "apple" },
              { label: "Banana", value: "banana" },
              { label: "Orange", value: "orange" },
            ]}
          />
        </GlassCard>

        {/* Glass Badge Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassBadge</h2>
          <div className="flex gap-4 flex-wrap">
            <GlassBadge color="blue">Info</GlassBadge>
            <GlassBadge color="green">Success</GlassBadge>
            <GlassBadge color="red">Error</GlassBadge>
            <GlassBadge color="yellow">Warning</GlassBadge>
            <GlassBadge color="purple">New</GlassBadge>
            <GlassBadge color="gray">Neutral</GlassBadge>
          </div>
        </GlassCard>

        {/* Glass Progress Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassProgress</h2>
          <GlassProgress value={60} color="blue" className="mb-2" />
          <GlassProgress value={35} color="green" className="mb-2" />
          <GlassProgress value={85} color="red" />
        </GlassCard>

        {/* Glass Loader Example */}
        <GlassCard className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">GlassLoader</h2>
          <div className="flex gap-6">
            <GlassLoader size={40} color="blue" />
            <GlassLoader size={32} color="green" />
            <GlassLoader size={48} color="red" />
            <GlassLoader size={40} color="purple" />
          </div>
        </GlassCard>

        {/* Glass Slider Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassSlider</h2>
          <GlassSlider label="Volume" min={0} max={100} defaultValue={50} />
        </GlassCard>

        {/* Glass Divider Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassDivider</h2>
          <div>
            <div className="mb-2 text-white">Section 1</div>
            <GlassDivider />
            <div className="mt-2 text-white">Section 2</div>
          </div>
        </GlassCard>

        {/* Glass Breadcrumbs Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassBreadcrumbs</h2>
          <GlassBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "GlassBreadcrumbs" },
            ]}
          />
        </GlassCard>

        {/* Glass Stepper Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassStepper</h2>
          <GlassStepper
            steps={["Start", "Shipping", "Payment", "Review", "Done"]}
            activeStep={tab}
          />
        </GlassCard>

        {/* Glass TabsBar Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassTabsBar</h2>
          <GlassTabsBar
            tabs={["Overview", "API", "Examples"]}
            activeTab={tab}
            onTabChange={setTab}
          />
        </GlassCard>

        {/* Glass Accordion Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassAccordion</h2>
          <GlassAccordion
            items={[
              { title: "Section 1", content: "This is the content for section 1." },
              { title: "Section 2", content: "This is the content for section 2." },
              { title: "Section 3", content: "This is the content for section 3." },
            ]}
          />
        </GlassCard>

        {/* Glass Timeline Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassTimeline</h2>
          <GlassTimeline
            items={[
              {
                title: "Project Kickoff",
                time: "2024-06-01",
                description: "Initial project planning and team alignment.",
              },
              {
                title: "Design Phase",
                time: "2024-06-10",
                description: "UI/UX design and prototyping.",
              },
              {
                title: "Development",
                time: "2024-06-20",
                description: "Core features implemented.",
              },
              {
                title: "Launch",
                time: "2024-07-01",
                description: "Product released to users.",
              },
            ]}
          />
        </GlassCard>

        {/* Glass Sidebar Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassSidebar</h2>
          <GlassSidebar
            items={[
              { label: "Dashboard", active: true },
              { label: "Profile" },
              { label: "Settings" },
              { label: "Logout" },
            ]}
          />
        </GlassCard>

        {/* Glass Popover Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassPopover</h2>
          <GlassPopover content={<div>This is a popover!</div>}>
            <GlassButton>Click me</GlassButton>
          </GlassPopover>
        </GlassCard>

        {/* Glass Notification Bell Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassNotificationBell</h2>
          <GlassNotificationBell count={3} />
        </GlassCard>

        {/* Glass Calendar Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassCalendar</h2>
          <GlassCalendar value={date} onChange={setDate} />
        </GlassCard>

        {/* Glass Chat Bubble Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassChatBubble</h2>
          <div className="flex flex-col gap-2">
            <GlassChatBubble message="Hello! How can I help you?" />
            <GlassChatBubble message="I need some info about your product." fromMe />
          </div>
        </GlassCard>

        {/* Glass File Uploader Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassFileUploader</h2>
          <GlassFileUploader onFile={setFile} />
          {file && <div className="mt-2 text-white">Selected: {file.name}</div>}
        </GlassCard>

        {/* Glass Pricing Table Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassPricingTable</h2>
          <GlassPricingTable
            plans={[
              { name: "Basic", price: "$9/mo", features: ["Feature 1", "Feature 2"] },
              { name: "Pro", price: "$19/mo", features: ["Feature 1", "Feature 2", "Feature 3"], highlight: true },
              { name: "Enterprise", price: "$49/mo", features: ["All Features"] },
            ]}
          />
        </GlassCard>

        {/* Glass Card Carousel Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassCardCarousel</h2>
          <GlassCardCarousel
            cards={[
              <GlassCard key={1} className="p-4">Card 1</GlassCard>,
              <GlassCard key={2} className="p-4">Card 2</GlassCard>,
              <GlassCard key={3} className="p-4">Card 3</GlassCard>,
            ]}
          />
        </GlassCard>

        {/* Glass Search Bar Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassSearchBar</h2>
          <GlassSearchBar value={search} onChange={setSearch} placeholder="Search..." />
        </GlassCard>

        {/* Glass Footer Example */}
        <GlassFooter
          links={[
            { label: "Docs", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Contact", href: "#" },
          ]}
        />

        {/* Glass Card Stack Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassCardStack</h2>
          <GlassCardStack
            cards={[
              <GlassCard key={1} className="p-4">Top Card</GlassCard>,
              <GlassCard key={2} className="p-4">Middle Card</GlassCard>,
              <GlassCard key={3} className="p-4">Bottom Card</GlassCard>,
            ]}
          />
        </GlassCard>

        {/* Glass Badge Pill Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassBadgePill</h2>
          <GlassBadgePill color="blue" count={5}>Inbox</GlassBadgePill>
        </GlassCard>

        {/* Glass Notification Center Example */}
        <GlassCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GlassNotificationCenter</h2>
          <GlassNotificationCenter
            notifications={[
              { message: "Welcome to Glass UI!", read: false },
              { message: "Your profile was updated.", read: true },
              { message: "New message received.", read: false },
            ]}
          />
        </GlassCard>
      </div>
    </div>
  );
}