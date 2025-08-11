"use client";
import React from "react";
import {
  GellyButton, GellyModal, GellyToast, GellyTabs, GellyCard, GellyDropdown, GellyTooltip, GellyAvatar, GellyInput, GellySwitch, GellyCheckbox, GellyTextarea, GellyRadio, GellySelect, GellyBadge, GellyProgress, GellyLoader, GellySlider, GellyDivider, GellyBreadcrumbs, GellyStepper, GellyTabsBar, GellyAccordion, GellyTimeline, GellyAvatar1, GellyNavbar, GellySidebar, GellyPopover, GellyNotificationBell, GellyCalendar, GellyChatBubble, GellyFileUploader, GellyPricingTable, GellyHeroBanner, GellyNotificationCenter, GellyCardCarousel, GellySearchBar, GellyFooter, GellyCardStack, GellyBadgePill
} from "@gelly-ui/core";

export default function Showcase() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [date, setDate] = React.useState("2024-06-23");
  const [search, setSearch] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <GellyHeroBanner
        title="Welcome to Gelly UI"
        subtitle="Beautiful glassmorphic React components"
      >
        <GellyButton>Get Started</GellyButton>
      </GellyHeroBanner>

      <GellyNavbar
        links={[
          { label: "Home", href: "#", active: true },
          { label: "Docs", href: "#docs" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ]}
        className="my-8"
      />

      <div className="flex flex-col gap-8">
        {/* Gelly Button Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyButton</h2>
          <GellyButton onClick={() => setModalOpen(true)}>Open Modal</GellyButton>
        </GellyCard>

        {/* Gelly Modal Example */}
        <GellyModal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="text-black">
            <h3 className="text-lg font-bold mb-2">Gelly Modal</h3>
            <p>This is a beautiful animated glass modal!</p>
            <GellyButton className="mt-4" onClick={() => setModalOpen(false)}>
              Close
            </GellyButton>
          </div>
        </GellyModal>

        {/* Gelly Toast Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyToast</h2>
          <GellyButton onClick={() => setToastOpen(true)}>Show Toast</GellyButton>
          <GellyToast
            show={toastOpen}
            message="This is a glass toast notification!"
            onClose={() => setToastOpen(false)}
          />
        </GellyCard>

        {/* Gelly Tabs Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyTabs</h2>
          <GellyTabs
            tabs={["Overview", "Features", "Pricing"]}
            value={tab}
            onChange={setTab}
          />
          <div className="mt-4">
            {tab === 0 && <div>Overview content...</div>}
            {tab === 1 && <div>Features content...</div>}
            {tab === 2 && <div>Pricing content...</div>}
          </div>
        </GellyCard>

        {/* Gelly Dropdown Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyDropdown</h2>
          <GellyDropdown
            label="Open Menu"
            items={[
              { label: "Profile", onClick: () => alert("Profile clicked") },
              { label: "Settings", onClick: () => alert("Settings clicked") },
              { label: "Logout", onClick: () => alert("Logout clicked") },
            ]}
          />
        </GellyCard>

        {/* Gelly Tooltip Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyTooltip</h2>
          <GellyTooltip content="This is a tooltip!">
            <GellyButton>Hover me</GellyButton>
          </GellyTooltip>
        </GellyCard>

        {/* Gelly Avatar Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyAvatar</h2>
          <div className="flex gap-6 items-center">
            <GellyAvatar src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            <GellyAvatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            <GellyAvatar src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" />
            <GellyAvatar1 alt="A">A</GellyAvatar1>
            <GellyAvatar1 size={32}>👾</GellyAvatar1>
          </div>
        </GellyCard>

        {/* Gelly Input Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyInput</h2>
          <GellyInput label="Your Name" placeholder="Enter your name..." />
        </GellyCard>

        {/* Gelly Switch Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellySwitch</h2>
          <GellySwitch
            checked={tab === 1}
            onChange={v => setTab(v ? 1 : 0)}
            label="Toggle Tab 1"
          />
        </GellyCard>

        {/* Gelly Checkbox Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyCheckbox</h2>
          <GellyCheckbox label="Accept Terms" checked={tab === 2} onChange={e => setTab(e.target.checked ? 2 : 0)} />
        </GellyCard>

        {/* Gelly Textarea Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyTextarea</h2>
          <GellyTextarea label="Message" placeholder="Type your message..." rows={4} />
        </GellyCard>

        {/* Gelly Radio Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyRadio</h2>
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
          <h2 className="text-xl font-semibold mb-2">GellySelect</h2>
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
          <h2 className="text-xl font-semibold mb-2">GellyBadge</h2>
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
          <h2 className="text-xl font-semibold mb-2">GellyProgress</h2>
          <GellyProgress value={60} color="blue" className="mb-2" />
          <GellyProgress value={35} color="green" className="mb-2" />
          <GellyProgress value={85} color="red" />
        </GellyCard>

        {/* Gelly Loader Example */}
        <GellyCard className="p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">GellyLoader</h2>
          <div className="flex gap-6">
            <GellyLoader size={40} color="blue" />
            <GellyLoader size={32} color="green" />
            <GellyLoader size={48} color="red" />
            <GellyLoader size={40} color="purple" />
          </div>
        </GellyCard>

        {/* Gelly Slider Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellySlider</h2>
          <GellySlider label="Volume" min={0} max={100} defaultValue={50} />
        </GellyCard>

        {/* Gelly Divider Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyDivider</h2>
          <div>
            <div className="mb-2 text-white">Section 1</div>
            <GellyDivider />
            <div className="mt-2 text-white">Section 2</div>
          </div>
        </GellyCard>

        {/* Gelly Breadcrumbs Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyBreadcrumbs</h2>
          <GellyBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Components", href: "/components" },
              { label: "GellyBreadcrumbs" },
            ]}
          />
        </GellyCard>

        {/* Gelly Stepper Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyStepper</h2>
          <GellyStepper
            steps={["Start", "Shipping", "Payment", "Review", "Done"]}
            activeStep={tab}
          />
        </GellyCard>

        {/* Gelly TabsBar Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyTabsBar</h2>
          <GellyTabsBar
            tabs={["Overview", "API", "Examples"]}
            activeTab={tab}
            onTabChange={setTab}
          />
        </GellyCard>

        {/* Gelly Accordion Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyAccordion</h2>
          <GellyAccordion
            items={[
              { title: "Section 1", content: "This is the content for section 1." },
              { title: "Section 2", content: "This is the content for section 2." },
              { title: "Section 3", content: "This is the content for section 3." },
            ]}
          />
        </GellyCard>

        {/* Gelly Timeline Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyTimeline</h2>
          <GellyTimeline
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
        </GellyCard>

        {/* Gelly Sidebar Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellySidebar</h2>
          <GellySidebar
            items={[
              { label: "Dashboard", active: true },
              { label: "Profile" },
              { label: "Settings" },
              { label: "Logout" },
            ]}
          />
        </GellyCard>

        {/* Gelly Popover Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyPopover</h2>
          <GellyPopover content={<div>This is a popover!</div>}>
            <GellyButton>Click me</GellyButton>
          </GellyPopover>
        </GellyCard>

        {/* Gelly Notification Bell Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyNotificationBell</h2>
          <GellyNotificationBell count={3} />
        </GellyCard>

        {/* Gelly Calendar Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyCalendar</h2>
          <GellyCalendar value={date} onChange={setDate} />
        </GellyCard>

        {/* Gelly Chat Bubble Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyChatBubble</h2>
          <div className="flex flex-col gap-2">
            <GellyChatBubble message="Hello! How can I help you?" />
            <GellyChatBubble message="I need some info about your product." fromMe />
          </div>
        </GellyCard>

        {/* Gelly File Uploader Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyFileUploader</h2>
          <GellyFileUploader onFile={setFile} />
          {file && <div className="mt-2 text-white">Selected: {file.name}</div>}
        </GellyCard>

        {/* Gelly Pricing Table Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyPricingTable</h2>
          <GellyPricingTable
            plans={[
              { name: "Basic", price: "$9/mo", features: ["Feature 1", "Feature 2"] },
              { name: "Pro", price: "$19/mo", features: ["Feature 1", "Feature 2", "Feature 3"], highlight: true },
              { name: "Enterprise", price: "$49/mo", features: ["All Features"] },
            ]}
          />
        </GellyCard>

        {/* Gelly Card Carousel Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyCardCarousel</h2>
          <GellyCardCarousel
            cards={[
              <GellyCard key={1} className="p-4">Card 1</GellyCard>,
              <GellyCard key={2} className="p-4">Card 2</GellyCard>,
              <GellyCard key={3} className="p-4">Card 3</GellyCard>,
            ]}
          />
        </GellyCard>

        {/* Gelly Search Bar Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellySearchBar</h2>
          <GellySearchBar value={search} onChange={setSearch} placeholder="Search..." />
        </GellyCard>

        {/* Gelly Footer Example */}
        <GellyFooter
          links={[
            { label: "Docs", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Contact", href: "#" },
          ]}
        />

        {/* Gelly Card Stack Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyCardStack</h2>
          <GellyCardStack
            cards={[
              <GellyCard key={1} className="p-4">Top Card</GellyCard>,
              <GellyCard key={2} className="p-4">Middle Card</GellyCard>,
              <GellyCard key={3} className="p-4">Bottom Card</GellyCard>,
            ]}
          />
        </GellyCard>

        {/* Gelly Badge Pill Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyBadgePill</h2>
          <GellyBadgePill color="blue" count={5}>Inbox</GellyBadgePill>
        </GellyCard>

        {/* Gelly Notification Center Example */}
        <GellyCard className="p-6">
          <h2 className="text-xl font-semibold mb-2">GellyNotificationCenter</h2>
          <GellyNotificationCenter
            notifications={[
              { message: "Welcome to Gelly UI!", read: false },
              { message: "Your profile was updated.", read: true },
              { message: "New message received.", read: false },
            ]}
          />
        </GellyCard>
      </div>
    </div>
  );
}