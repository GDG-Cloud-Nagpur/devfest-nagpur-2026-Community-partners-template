/*
  Default captions shown in the "Write caption" tab.
  - Edit freely: each platform can have several variants (shown in a dropdown).
  - Use [Placeholders] anywhere. Partners fill each one ONCE and it is applied to every caption.
  - Special placeholders:
      [Community name]  -> also becomes the name caption on the poster
      [Coupon code]     -> also becomes the coupon badge on the poster
      [DEVFEST REGISTRATION LINK] (or [Ticket link]) -> filled with https://devfest.gdgcngp.in/#tickets (partner can edit it)
      [Website]         -> always https://devfest.gdgcngp.in
  - Any other [Placeholder] you add automatically gets its own input box.
*/
window.CAPTIONS = {
  linkedin: [
    { name: "Announcement", text:
`🚀 Excited to share that [Community name] is a proud Community Partner of DevFest Nagpur 2026, organised by GDG Cloud Nagpur!

DevFest brings together developers, designers, students and tech leaders for a day of learning, hands-on sessions and networking around Google technologies, Cloud and AI.

🎟️ Grab your ticket and use code [Coupon code] for a special community discount:
[Ticket link]

🌐 Know more: [Website]

Tag a friend who should be there!

#DevFest #DevFestNagpur #GDGCloudNagpur #GoogleDeveloperGroups #Nagpur #Cloud #AI` },
    { name: "Short", text:
`We're a Community Partner for DevFest Nagpur 2026 with GDG Cloud Nagpur! 🎉
Use code [Coupon code] on your ticket: [Ticket link]
🌐 [Website]

#DevFest #DevFestNagpur #GDGCloudNagpur` }
  ],

  instagram: [
    { name: "Announcement", text:
`🎉 [Community name] x DevFest Nagpur 2026!

We're a Community Partner for the biggest developer festival in the city, hosted by GDG Cloud Nagpur. Learn, build and connect with the community. 💻✨

🎟️ Use code [Coupon code] on your ticket.
🔗 Tickets: link in bio
🌐 [Website]

Tag someone you'd bring along 👇

#DevFest #DevFestNagpur #GDGCloudNagpur #GoogleDevelopers #Nagpur #TechCommunity #Cloud #AI #Developers` },
    { name: "Short", text:
`[Community name] is a Community Partner of DevFest Nagpur 2026 🎉
Use code [Coupon code] — link in bio 🎟️
🌐 [Website]

#DevFest #DevFestNagpur #GDGCloudNagpur` }
  ],

  x: [
    { name: "Announcement", text:
`🚀 [Community name] is a Community Partner of #DevFestNagpur 2026 by #GDGCloudNagpur!
Use code [Coupon code] for a ticket discount 🎟️
[Ticket link]
🌐 [Website]` },
    { name: "Short", text:
`See you at #DevFestNagpur 2026! Code [Coupon code] 🎟️ [Ticket link] #GDGCloudNagpur` }
  ],

  whatsapp: [
    { name: "Announcement", text:
`*DevFest Nagpur 2026* 🎉

*[Community name]* is a Community Partner of DevFest Nagpur, organised by GDG Cloud Nagpur.

🎟️ Use code *[Coupon code]* for a community discount.
Get your ticket: [Ticket link]
🌐 Website: [Website]

Forward this to friends who'd love to join! 🙌` },
    { name: "Short", text:
`Join us at *DevFest Nagpur 2026*! Use code *[Coupon code]* 🎟️
[Ticket link]
🌐 [Website]` }
  ]
};
