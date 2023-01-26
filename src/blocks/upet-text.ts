export const uPetTextBlock = {
  type: "text",
  name: "t:sections.image-banner.blocks.text.name",
  limit: 3,
  settings: [
    {
      type: "text",
      id: "text",
      default: "Changing the default value to test",
      label: "t:sections.image-banner.blocks.text.settings.text.label",
    },
    {
      type: "select",
      id: "text_style",
      options: [
        {
          value: "body",
          label:
            "t:sections.image-banner.blocks.text.settings.text_style.options__1.label",
        },
        {
          value: "subtitle",
          label:
            "t:sections.image-banner.blocks.text.settings.text_style.options__2.label",
        },
        {
          value: "caption-with-letter-spacing",
          label:
            "t:sections.image-banner.blocks.text.settings.text_style.options__3.label",
        },
      ],
      default: "body",
      label: "t:sections.image-banner.blocks.text.settings.text_style.label",
    },
  ],
};
