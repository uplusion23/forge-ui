import { Registry } from "@/registry/schema"

const guideExamples: Registry = [
  {
    name: "guide-dialog-bad",
    type: "components:example",
    registryDependencies: ["card"],
    files: ["example/guide-dialog-bad.tsx"],
  },
  {
    name: "guide-dialog-good",
    type: "components:example",
    registryDependencies: ["card"],
    files: ["example/guide-dialog-good.tsx"],
  },
  {
    name: "guide-screen-space-bad",
    type: "components:example",
    registryDependencies: ["card", "switch", "button"],
    files: ["example/guide-screen-space-bad.tsx"],
  },
]

export const examples: Registry = [
  ...guideExamples,
  {
    name: "accordion-demo",
    type: "components:example",
    registryDependencies: ["accordion"],
    files: ["example/accordion-demo.tsx"],
  },
  {
    name: "alert-demo",
    type: "components:example",
    registryDependencies: ["alert"],
    files: ["example/alert-demo.tsx"],
  },
  {
    name: "alert-destructive",
    type: "components:example",
    registryDependencies: ["alert"],
    files: ["example/alert-destructive.tsx"],
  },
  {
    name: "alert-dialog-demo",
    type: "components:example",
    registryDependencies: ["alert-dialog", "button"],
    files: ["example/alert-dialog-demo.tsx"],
  },
  {
    name: "aspect-ratio-demo",
    type: "components:example",
    registryDependencies: ["aspect-ratio"],
    files: ["example/aspect-ratio-demo.tsx"],
  },
  {
    name: "avatar-demo",
    type: "components:example",
    registryDependencies: ["avatar"],
    files: ["example/avatar-demo.tsx"],
  },
  {
    name: "badge-demo",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-demo.tsx"],
  },
  {
    name: "badge-destructive",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-destructive.tsx"],
  },
  {
    name: "badge-outline",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-outline.tsx"],
  },
  {
    name: "badge-secondary",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-secondary.tsx"],
  },
  {
    name: "breadcrumb-demo",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-demo.tsx"],
  },
  {
    name: "breadcrumb-separator",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-separator.tsx"],
  },
  {
    name: "breadcrumb-dropdown",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-dropdown.tsx"],
  },
  {
    name: "breadcrumb-ellipsis",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-ellipsis.tsx"],
  },
  {
    name: "breadcrumb-link",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-link.tsx"],
  },
  {
    name: "breadcrumb-responsive",
    type: "components:example",
    registryDependencies: ["breadcrumb"],
    files: ["example/breadcrumb-responsive.tsx"],
  },
  {
    name: "button-demo",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-demo.tsx"],
  },
  {
    name: "button-secondary",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-secondary.tsx"],
  },
  {
    name: "button-destructive",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-destructive.tsx"],
  },
  {
    name: "button-outline",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-outline.tsx"],
  },
  {
    name: "button-ghost",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-ghost.tsx"],
  },
  {
    name: "button-link",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-link.tsx"],
  },
  {
    name: "button-with-icon",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-with-icon.tsx"],
  },
  {
    name: "button-loading",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-loading.tsx"],
  },
  {
    name: "button-icon",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-icon.tsx"],
  },
  {
    name: "button-as-child",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-as-child.tsx"],
  },
  {
    name: "calendar-demo",
    type: "components:example",
    registryDependencies: ["calendar"],
    files: ["example/calendar-demo.tsx"],
  },
  {
    name: "calendar-form",
    type: "components:example",
    registryDependencies: ["calendar", "form", "popover"],
    files: ["example/calendar-form.tsx"],
  },
  {
    name: "card-demo",
    type: "components:example",
    registryDependencies: ["card", "button", "switch"],
    files: ["example/card-demo.tsx"],
  },
  {
    name: "card-with-form",
    type: "components:example",
    registryDependencies: ["button", "card", "input", "label", "select"],
    files: ["example/card-with-form.tsx"],
  },
  {
    name: "carousel-demo",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel-demo.tsx"],
  },
  {
    name: "carousel-size",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel-size.tsx"],
  },
  {
    name: "carousel-spacing",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel-spacing.tsx"],
  },
  {
    name: "carousel-orientation",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel-orientation.tsx"],
  },
  {
    name: "carousel-api",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel-api.tsx"],
  },
  {
    name: "carousel-plugin",
    type: "components:example",
    registryDependencies: ["carousel"],
    files: ["example/carousel-plugin.tsx"],
  },
  {
    name: "checkbox-demo",
    type: "components:example",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-demo.tsx"],
  },
  {
    name: "checkbox-disabled",
    type: "components:example",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-disabled.tsx"],
  },
  {
    name: "checkbox-form-multiple",
    type: "components:example",
    registryDependencies: ["checkbox", "form"],
    files: ["example/checkbox-form-multiple.tsx"],
  },
  {
    name: "checkbox-form-single",
    type: "components:example",
    registryDependencies: ["checkbox", "form"],
    files: ["example/checkbox-form-single.tsx"],
  },
  {
    name: "checkbox-with-text",
    type: "components:example",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-with-text.tsx"],
  },
  {
    name: "collapsible-demo",
    type: "components:example",
    registryDependencies: ["collapsible"],
    files: ["example/collapsible-demo.tsx"],
  },
  {
    name: "combobox-demo",
    type: "components:example",
    registryDependencies: ["command"],
    files: ["example/combobox-demo.tsx"],
  },
  {
    name: "combobox-dropdown-menu",
    type: "components:example",
    registryDependencies: ["command", "dropdown-menu", "button"],
    files: ["example/combobox-dropdown-menu.tsx"],
  },
  {
    name: "combobox-form",
    type: "components:example",
    registryDependencies: ["command", "form"],
    files: ["example/combobox-form.tsx"],
  },
  {
    name: "combobox-popover",
    type: "components:example",
    registryDependencies: ["combobox", "popover"],
    files: ["example/combobox-popover.tsx"],
  },
  {
    name: "combobox-responsive",
    type: "components:example",
    registryDependencies: ["combobox", "popover", "drawer"],
    files: ["example/combobox-responsive.tsx"],
  },
  {
    name: "command-demo",
    type: "components:example",
    registryDependencies: ["command"],
    files: ["example/command-demo.tsx"],
  },
  {
    name: "command-dialog",
    type: "components:example",
    registryDependencies: ["command", "dialog"],
    files: ["example/command-dialog.tsx"],
  },
  {
    name: "context-menu-demo",
    type: "components:example",
    registryDependencies: ["context-menu"],
    files: ["example/context-menu-demo.tsx"],
  },
  {
    name: "data-table-demo",
    type: "components:example",
    registryDependencies: ["data-table"],
    files: ["example/data-table-demo.tsx"],
  },
  {
    name: "date-picker-demo",
    type: "components:example",
    registryDependencies: ["button", "calendar", "popover"],
    files: ["example/date-picker-demo.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-form",
    type: "components:example",
    registryDependencies: ["button", "calendar", "form", "popover"],
    files: ["example/date-picker-form.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-with-presets",
    type: "components:example",
    registryDependencies: ["button", "calendar", "popover", "select"],
    files: ["example/date-picker-with-presets.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-with-range",
    type: "components:example",
    registryDependencies: ["button", "calendar", "popover"],
    files: ["example/date-picker-with-range.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "dialog-demo",
    type: "components:example",
    registryDependencies: ["dialog"],
    files: ["example/dialog-demo.tsx"],
  },
  {
    name: "dot-background-demo",
    type: "components:example",
    registryDependencies: ["dot-background"],
    files: ["example/dot-background-demo.tsx"],
  },
  {
    name: "dialog-close-button",
    type: "components:example",
    registryDependencies: ["dialog", "button"],
    files: ["example/dialog-close-button.tsx"],
  },
  {
    name: "drawer-demo",
    type: "components:example",
    registryDependencies: ["drawer"],
    files: ["example/drawer-demo.tsx"],
  },
  {
    name: "drawer-dialog",
    type: "components:example",
    registryDependencies: ["drawer", "dialog"],
    files: ["example/drawer-dialog.tsx"],
  },
  {
    name: "dropdown-menu-demo",
    type: "components:example",
    registryDependencies: ["dropdown-menu"],
    files: ["example/dropdown-menu-demo.tsx"],
  },
  {
    name: "dropdown-menu-checkboxes",
    type: "components:example",
    registryDependencies: ["dropdown-menu", "checkbox"],
    files: ["example/dropdown-menu-checkboxes.tsx"],
  },
  {
    name: "dropdown-menu-radio-group",
    type: "components:example",
    registryDependencies: ["dropdown-menu", "radio-group"],
    files: ["example/dropdown-menu-radio-group.tsx"],
  },
  {
    name: "hover-card-demo",
    type: "components:example",
    registryDependencies: ["hover-card"],
    files: ["example/hover-card-demo.tsx"],
  },
  {
    name: "input-demo",
    type: "components:example",
    registryDependencies: ["input"],
    files: ["example/input-demo.tsx"],
  },
  {
    name: "input-disabled",
    type: "components:example",
    registryDependencies: ["input"],
    files: ["example/input-disabled.tsx"],
  },
  {
    name: "input-file",
    type: "components:example",
    registryDependencies: ["input"],
    files: ["example/input-file.tsx"],
  },
  {
    name: "input-form",
    type: "components:example",
    registryDependencies: ["input", "button", "form"],
    files: ["example/input-form.tsx"],
  },
  {
    name: "input-with-button",
    type: "components:example",
    registryDependencies: ["input", "button"],
    files: ["example/input-with-button.tsx"],
  },
  {
    name: "input-with-label",
    type: "components:example",
    registryDependencies: ["input", "button", "label"],
    files: ["example/input-with-label.tsx"],
  },
  {
    name: "input-with-text",
    type: "components:example",
    registryDependencies: ["input", "button", "label"],
    files: ["example/input-with-text.tsx"],
  },
  {
    name: "input-otp-demo",
    type: "components:example",
    registryDependencies: ["input-otp"],
    files: ["example/input-otp-demo.tsx"],
  },
  {
    name: "input-otp-pattern",
    type: "components:example",
    registryDependencies: ["input-otp"],
    files: ["example/input-otp-pattern.tsx"],
  },
  {
    name: "input-otp-separator",
    type: "components:example",
    registryDependencies: ["input-otp"],
    files: ["example/input-otp-separator.tsx"],
  },
  {
    name: "input-otp-controlled",
    type: "components:example",
    registryDependencies: ["input-otp"],
    files: ["example/input-otp-controlled.tsx"],
  },
  {
    name: "input-otp-form",
    type: "components:example",
    registryDependencies: ["input-otp", "form"],
    files: ["example/input-otp-form.tsx"],
  },
  {
    name: "label-demo",
    type: "components:example",
    registryDependencies: ["label"],
    files: ["example/label-demo.tsx"],
  },
  {
    name: "menubar-demo",
    type: "components:example",
    registryDependencies: ["menubar"],
    files: ["example/menubar-demo.tsx"],
  },
  {
    name: "navigation-menu-demo",
    type: "components:example",
    registryDependencies: ["navigation-menu"],
    files: ["example/navigation-menu-demo.tsx"],
  },
  {
    name: "number-ticker-demo",
    type: "components:example",
    registryDependencies: ["number-ticker"],
    files: ["example/number-ticker-demo.tsx"],
  },
  {
    name: "number-ticker-demo-down",
    type: "components:example",
    registryDependencies: ["number-ticker"],
    files: ["example/number-ticker-demo-down.tsx"],
  },
  {
    name: "pagination-demo",
    type: "components:example",
    registryDependencies: ["pagination"],
    files: ["example/pagination-demo.tsx"],
  },
  {
    name: "popover-demo",
    type: "components:example",
    registryDependencies: ["popover"],
    files: ["example/popover-demo.tsx"],
  },
  {
    name: "progress-demo",
    type: "components:example",
    registryDependencies: ["progress"],
    files: ["example/progress-demo.tsx"],
  },
  {
    name: "radio-group-demo",
    type: "components:example",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group-demo.tsx"],
  },
  {
    name: "radio-group-form",
    type: "components:example",
    registryDependencies: ["radio-group", "form"],
    files: ["example/radio-group-form.tsx"],
  },
  {
    name: "resizable-demo",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-demo.tsx"],
  },
  {
    name: "resizable-demo-with-handle",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-demo-with-handle.tsx"],
  },
  {
    name: "resizable-vertical",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-vertical.tsx"],
  },
  {
    name: "resizable-handle",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-handle.tsx"],
  },
  {
    name: "scroll-area-demo",
    type: "components:example",
    registryDependencies: ["scroll-area"],
    files: ["example/scroll-area-demo.tsx"],
  },
  {
    name: "scroll-area-horizontal-demo",
    type: "components:example",
    registryDependencies: ["scroll-area"],
    files: ["example/scroll-area-horizontal-demo.tsx"],
  },
  {
    name: "select-demo",
    type: "components:example",
    registryDependencies: ["select"],
    files: ["example/select-demo.tsx"],
  },
  {
    name: "select-scrollable",
    type: "components:example",
    registryDependencies: ["select"],
    files: ["example/select-scrollable.tsx"],
  },
  {
    name: "select-form",
    type: "components:example",
    registryDependencies: ["select"],
    files: ["example/select-form.tsx"],
  },
  {
    name: "separator-demo",
    type: "components:example",
    registryDependencies: ["separator"],
    files: ["example/separator-demo.tsx"],
  },
  {
    name: "sheet-demo",
    type: "components:example",
    registryDependencies: ["sheet"],
    files: ["example/sheet-demo.tsx"],
  },
  {
    name: "sheet-side",
    type: "components:example",
    registryDependencies: ["sheet"],
    files: ["example/sheet-side.tsx"],
  },
  {
    name: "skeleton-demo",
    type: "components:example",
    registryDependencies: ["skeleton"],
    files: ["example/skeleton-demo.tsx"],
  },
  {
    name: "skeleton-card",
    type: "components:example",
    registryDependencies: ["skeleton"],
    files: ["example/skeleton-card.tsx"],
  },
  {
    name: "slider-demo",
    type: "components:example",
    registryDependencies: ["slider"],
    files: ["example/slider-demo.tsx"],
  },
  {
    name: "sonner-demo",
    type: "components:example",
    registryDependencies: ["sonner"],
    files: ["example/sonner-demo.tsx"],
  },
  {
    name: "switch-demo",
    type: "components:example",
    registryDependencies: ["switch"],
    files: ["example/switch-demo.tsx"],
  },
  {
    name: "switch-form",
    type: "components:example",
    registryDependencies: ["switch", "form"],
    files: ["example/switch-form.tsx"],
  },
  {
    name: "table-demo",
    type: "components:example",
    registryDependencies: ["table"],
    files: ["example/table-demo.tsx"],
  },
  {
    name: "tabs-demo",
    type: "components:example",
    registryDependencies: ["tabs"],
    files: ["example/tabs-demo.tsx"],
  },
  {
    name: "textarea-demo",
    type: "components:example",
    registryDependencies: ["textarea"],
    files: ["example/textarea-demo.tsx"],
  },
  {
    name: "textarea-disabled",
    type: "components:example",
    registryDependencies: ["textarea"],
    files: ["example/textarea-disabled.tsx"],
  },
  {
    name: "textarea-form",
    type: "components:example",
    registryDependencies: ["textarea", "form"],
    files: ["example/textarea-form.tsx"],
  },
  {
    name: "textarea-with-button",
    type: "components:example",
    registryDependencies: ["textarea", "button"],
    files: ["example/textarea-with-button.tsx"],
  },
  {
    name: "textarea-with-label",
    type: "components:example",
    registryDependencies: ["textarea", "label"],
    files: ["example/textarea-with-label.tsx"],
  },
  {
    name: "textarea-with-text",
    type: "components:example",
    registryDependencies: ["textarea", "label"],
    files: ["example/textarea-with-text.tsx"],
  },
  {
    name: "toast-demo",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-demo.tsx"],
  },
  {
    name: "toast-destructive",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-destructive.tsx"],
  },
  {
    name: "toast-simple",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-simple.tsx"],
  },
  {
    name: "toast-with-action",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-with-action.tsx"],
  },
  {
    name: "toast-with-title",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-with-title.tsx"],
  },
  {
    name: "toggle-group-demo",
    type: "components:example",
    registryDependencies: ["toggle-group"],
    files: ["example/toggle-group-demo.tsx"],
  },
  {
    name: "toggle-group-disabled",
    type: "components:example",
    registryDependencies: ["toggle-group"],
    files: ["example/toggle-group-disabled.tsx"],
  },
  {
    name: "toggle-group-lg",
    type: "components:example",
    registryDependencies: ["toggle-group"],
    files: ["example/toggle-group-lg.tsx"],
  },
  {
    name: "toggle-group-outline",
    type: "components:example",
    registryDependencies: ["toggle-group"],
    files: ["example/toggle-group-outline.tsx"],
  },
  {
    name: "toggle-group-sm",
    type: "components:example",
    registryDependencies: ["toggle-group"],
    files: ["example/toggle-group-sm.tsx"],
  },
  {
    name: "toggle-group-single",
    type: "components:example",
    registryDependencies: ["toggle-group"],
    files: ["example/toggle-group-single.tsx"],
  },
  {
    name: "toggle-demo",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-demo.tsx"],
  },
  {
    name: "toggle-disabled",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-disabled.tsx"],
  },
  {
    name: "toggle-lg",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-lg.tsx"],
  },
  {
    name: "toggle-outline",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-outline.tsx"],
  },
  {
    name: "toggle-sm",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-sm.tsx"],
  },
  {
    name: "toggle-with-text",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-with-text.tsx"],
  },
  {
    name: "tooltip-demo",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-demo.tsx"],
  },
  {
    name: "typography-blockquote",
    type: "components:example",
    files: ["example/typography-blockquote.tsx"],
  },
  {
    name: "typography-demo",
    type: "components:example",
    files: ["example/typography-demo.tsx"],
  },
  {
    name: "typography-h1",
    type: "components:example",
    files: ["example/typography-h1.tsx"],
  },
  {
    name: "typography-h2",
    type: "components:example",
    files: ["example/typography-h2.tsx"],
  },
  {
    name: "typography-h3",
    type: "components:example",
    files: ["example/typography-h3.tsx"],
  },
  {
    name: "typography-h4",
    type: "components:example",
    files: ["example/typography-h4.tsx"],
  },
  {
    name: "typography-inline-code",
    type: "components:example",
    files: ["example/typography-inline-code.tsx"],
  },
  {
    name: "typography-large",
    type: "components:example",
    files: ["example/typography-large.tsx"],
  },
  {
    name: "typography-lead",
    type: "components:example",
    files: ["example/typography-lead.tsx"],
  },
  {
    name: "typography-list",
    type: "components:example",
    files: ["example/typography-list.tsx"],
  },
  {
    name: "typography-muted",
    type: "components:example",
    files: ["example/typography-muted.tsx"],
  },
  {
    name: "typography-p",
    type: "components:example",
    files: ["example/typography-p.tsx"],
  },
  {
    name: "typography-small",
    type: "components:example",
    files: ["example/typography-small.tsx"],
  },
  {
    name: "typography-table",
    type: "components:example",
    files: ["example/typography-table.tsx"],
  },
  {
    name: "mode-toggle",
    type: "components:example",
    files: ["example/mode-toggle.tsx"],
  },
  {
    name: "cards",
    type: "components:example",
    files: ["example/cards/cards.tsx"],
  },
  {
    name: "chart-bar-demo",
    type: "components:example",
    files: ["example/chart-bar-demo.tsx"],
  },
  {
    name: "chart-bar-demo-grid",
    type: "components:example",
    files: ["example/chart-bar-demo-grid.tsx"],
  },
  {
    name: "chart-bar-demo-axis",
    type: "components:example",
    files: ["example/chart-bar-demo-axis.tsx"],
  },
  {
    name: "chart-bar-demo-tooltip",
    type: "components:example",
    files: ["example/chart-bar-demo-tooltip.tsx"],
  },
  {
    name: "chart-bar-demo-legend",
    type: "components:example",
    files: ["example/chart-bar-demo-legend.tsx"],
  },
  {
    name: "chart-tooltip-demo",
    type: "components:example",
    files: ["example/chart-tooltip-demo.tsx"],
  },
]
