const CSS_TAILWIND = {

  //  --- Layout ---
  // Container
  "container":	"width: 100%",
  "sm:container": "max-width: 640px",
  "md:container": "max-width: 768px",
  "lg:container": "max-width: 1024px",
  "xl:container": "max-width: 1280px",
  "2xl:container": "max-width: 1536px",

  // Box Sizing
  "box-border":	"box-sizing: border-box",
  "box-content":	"box-sizing: content-box",

  // Display
  "flex":	"display: flex",
  "hidden":	"display: none",


  // Position
  fixed: "position: fixed",
  absolute: "position: absolute",
  relative: "position: relative",


  // Z-index
  "z-0": "z-index: 0",
  "z-10": "z-index: 10",
  "z-20": "z-index: 20",
  "z-30": "z-index: 30",
  "z-40": "z-index: 40",
  "z-50": "z-index: 50",
  "z-auto": "z-index: auto",

  //  --- Flexbox ---

  // Flex Direction
  "flex-row":	"flex-direction: row",
  "flex-row-reverse":	"flex-direction: row-reverse",
  "flex-col":	"flex-direction: column",
  "flex-col-reverse":	"flex-direction: column-reverse",

  // Flex Wrap
  "flex-wrap":	"flex-wrap: wrap",
  "flex-wrap-reverse":	"flex-wrap: wrap-reverse",
  "flex-nowrap":	"flex-wrap: nowrap",

  // Flex
  "flex-1":	"flex: 1 1 0%",
  "flex-auto":	"flex: 1 1 auto",
  "flex-initial":	"flex: 0 1 auto",
  "flex-none":	"flex: none",

  // Flex Grow
  "grow":	"flex-grow: 1",
  "grow-0":	"flex-grow: 0",

  // Flex Shrink
  "shrink":	"flex-shrink: 1",
  "shrink-0":	"flex-shrink: 0",

  // Order
  "order-1":	"order: 1",
  "order-2":	"order: 2",
  "order-3":	"order: 3",
  "order-4":	"order: 4",
  "order-5":	"order: 5",
  "order-6":	"order: 6",
  "order-7":	"order: 7",
  "order-8":	"order: 8",
  "order-9":	"order: 9",
  "order-10":	"order: 10",
  "order-11":	"order: 11",
  "order-12":	"order: 12",
  "order-first":	"order: -9999",
  "order-last":	"order: 9999",
  "order-none":	"order: 0",

  // Gap
  "gap-0":	"gap: 0px",
  "gap-0.5":	"gap: 2px",
  "gap-1":	"gap: 4px",
  "gap-1.5":	"gap: 6px",
  "gap-2":	"gap: 8px",
  "gap-2.5":	"gap: 10px",
  "gap-3":	"gap: 12px",
  "gap-3.5":	"gap: 14px",
  "gap-4":	"gap: 16px",
  "gap-5":	"gap: 20px",
  "gap-6":	"gap: 24px",
  "gap-7":	"gap: 28px",
  "gap-8":	"gap: 32px",
  "gap-9":	"gap: 36px",
  "gap-10":	"gap: 40px",
  "gap-11":	"gap: 44px",
  "gap-12":	"gap: 48px",
  "gap-14":	"gap: 56px",
  "gap-16":	"gap: 64px",
  "gap-20":	"gap: 80px",
  "gap-24":	"gap: 96px",
  "gap-28":	"gap: 112px",
  "gap-32":	"gap: 128px",
  "gap-36":	"gap: 144px",
  "gap-40":	"gap: 160px",
  "gap-44":	"gap: 176px",
  "gap-48":	"gap: 192px",
  "gap-52":	"gap: 208px",
  "gap-56":	"gap: 224px",
  "gap-60":	"gap: 240px",
  "gap-64":	"gap: 256px",
  "gap-72":	"gap: 288px",
  "gap-80":	"gap: 320px",
  "gap-96":	"gap: 384px",

  // Justify Content
  "justify-normal": "justify-content: normal",
  "justify-start": "justify-content: flex-start",
  "justify-end": "justify-content: flex-end",
  "justify-center": "justify-content: center",
  "justify-between": "justify-content: space-between",
  "justify-around": "justify-content: space-around",
  "justify-evenly": "justify-content: space-evenly",
  "justify-stretch": "justify-content: stretch",

  // Justify Items
  "justify-items-start":	"justify-items: start",
  "justify-items-end":	"justify-items: end",
  "justify-items-center":	"justify-items: center",
  "justify-items-stretch":	"justify-items: stretch",

  // Justify Self
  "justify-self-auto":	"justify-self: auto",
  "justify-self-start":	"justify-self: start",
  "justify-self-end":	"justify-self: end",
  "justify-self-center":	"justify-self: center",
  "justify-self-stretch":	"justify-self: stretch",

  // Align Content
  "content-normal": "align-content: normal",
  "content-center": "align-content: center",
  "content-start": "align-content: flex-start",
  "content-end": "align-content: flex-end",
  "content-between": "align-content: space-between",
  "content-around": "align-content: space-around",
  "content-evenly": "align-content: space-evenly",
  "content-baseline": "align-content: baseline",
  "content-stretch": "align-content: stretch",

  // Align Items
  "items-start": "align-items: flex-start",
  "items-end": "align-items: flex-end",
  "items-center": "align-items: center",
  "items-baseline": "align-items: baseline",
  "items-stretch": "align-items: stretch",

  // Align Self
  "self-auto":	"align-self: auto",
  "self-start":	"align-self: flex-start",
  "self-end":	"align-self: flex-end",
  "self-center":	"align-self: center",
  "self-stretch":	"align-self: stretch",
  "self-baseline":	"align-self: baseline",


  // --- Typography ---

  // Font Size
  "text-xs":	"font-size:  12px; line-height: 16px",
  "text-sm":	"font-size:  14px; line-height:  20px",
  "text-base":	"font-size: 16px; line-height:  24px",
  "text-lg":	"font-size:  18px; line-height:  28px",
  "text-xl":	"font-size:  20px; line-height:  28px",
  "text-2xl":	"font-size:  24px; line-height: 32px",
  "text-3xl":	"font-size:  30px; line-height:  36px",
  "text-4xl":	"font-size:  36px; line-height:  40px",
  "text-5xl":	"font-size: 48px; line-height: 1",
  "text-6xl":	"font-size:  60px; line-height: 1",
  "text-7xl":	"font-size:  72px; line-height: 1",
  "text-8xl":	"font-size: 96px; line-height: 1",
  "text-9xl":	"font-size: 128px; line-height: 1",

  // Font Style
  "italic":	"font-style: italic",
  "not-italic":	"font-style: normal",

  // Text Align
  "text-left":	"text-align: left",
  "text-center":	"text-align: center",
  "text-right":	"text-align: right",
  "text-justify":	"text-align: justify",
  "text-start":	"text-align: start",
  "text-end":	"text-align: end",

  // Text Transform
  "uppercase":	"text-transform: uppercase",
  "lowercase":	"text-transform: lowercase",
  "capitalize":	"text-transform: capitalize",
  "normal-case":	"text-transform: none",

  // --- Backgrounds ---

  // Background Position
  "bg-bottom":	"background-position: bottom",
  "bg-center":	"background-position: center",
  "bg-left":	"background-position: left",
  "bg-left-bottom":	"background-position: left bottom",
  "bg-left-top":	"background-position: left top",
  "bg-right":	"background-position: right",
  "bg-right-bottom":	"background-position: right bottom",
  "bg-right-top":	"background-position: right top",
  "bg-top":	"background-position: top",

  // Background Repeat
  "bg-repeat":	"background-repeat: repeat",
  "bg-no-repeat":	"background-repeat: no-repeat",
  "bg-repeat-x":	"background-repeat: repeat-x",
  "bg-repeat-y":	"background-repeat: repeat-y",
  "bg-repeat-round":	"background-repeat: round",
  "bg-repeat-space":	"background-repeat: space",

  // Background Size
  "bg-auto":	"background-size: auto",
  "bg-cover":	"background-size: cover",
  "bg-contain":	"background-size: contain",

  // --- Borders ---

  // Border Style
  "border-solid": "border-style: solid",
  "border-dashed": "border-style: dashed",
  "border-dotted": "border-style: dotted",
  "border-double": "border-style: double",
  "border-hidden": "border-style: hidden",
  "border-none": "border-style: none",


  // --- Effects ---

  // Opacity
  "opacity-0":	"opacity: 0",
  "opacity-5":	"opacity: 0.05",
  "opacity-10":	"opacity: 0.1",
  "opacity-20":	"opacity: 0.2",
  "opacity-25":	"opacity: 0.25",
  "opacity-30":	"opacity: 0.3",
  "opacity-40":	"opacity: 0.4",
  "opacity-50":	"opacity: 0.5",
  "opacity-60":	"opacity: 0.6",
  "opacity-70":	"opacity: 0.7",
  "opacity-75":	"opacity: 0.75",
  "opacity-80":	"opacity: 0.8",
  "opacity-90":	"opacity: 0.9",
  "opacity-95":	"opacity: 0.95",
  "opacity-100":	"opacity: 1",
};

const CSS_CUSTOM = {
  "border-0": "border-width: 0px",
  "border-2": "border-width: 2px",
  "border-4": "border-width: 4px",
  "border-8": "border-width: 8px",
  border: "border-width: 1px",

  "rounded-md": "border-radius: 6px",
  "rounded-lg": "border-radius: 8px",
  "rounded-xl": "border-radius: 12px",
  "rounded-2xl": "border-radius: 16px",

  "text-center": "text-align: center",

  "font-normal": "font-weight: normal",
  "font-bold": "font-weight: bold",

  "mr-3": "margin-right: 12px",
  "mb-2": "margin-bottom: 8px",
  "mb-4": "margin-bottom: 16px",
  "mb-5": "margin-bottom: 20px",

  "p-3": "padding: 12px",
  "p-4": "padding: 16px",

  "pb-3": "padding-bottom: 8px",

  "py-2.5": "padding-top: 10px padding-bottom: 10px",

  "px-3": "padding-left: 8px padding-right: 8px",
  "px-4": "padding-left: 16px padding-right: 16px",

  "w-full": "width: 100%",

  "top-7": "top: 14px",
  "left-5": "left: 10px",

  "w-{72}": "width: 72px",
  "w-{250}": "width: 250px",
  "h-{72}": "height: 72px",

  "text-black": "color: #000000",

  "bg-primary-light": "background-color: #362C36",
  "bg-primary-dark": "background-color: #171017",
  "bg-secondary": "background-color: #EFE3C8",

  "border-secondary": "border-color: #EFE3C8",
  "border-secondary-dark": "border-color: #88776F",
}

const CSS = {...CSS_TAILWIND, ...CSS_CUSTOM};

export function stylish(props: any) {
  const styles = props?.styles?.split(" ").filter((value) => value) || [];
  // console.log("styles", styles);

  const result = styles.reduce((prev, cur) => {
    return prev + " " + CSS[cur] + ";";
  }, "");

  // console.log("result", result);
  return result;
}
