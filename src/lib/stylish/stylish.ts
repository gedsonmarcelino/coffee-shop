const STYLE_NAMES = {
  "border-0": "border-width: 0px",
  "border-2": "border-width: 2px",
  "border-4": "border-width: 4px",
  "border-8": "border-width: 8px",
  border: "border-width: 1px",

  "border-solid": "border-style: solid",
  "border-dashed": "border-style: dashed",
  "border-dotted": "border-style: dotted",
  "border-double": "border-style: double",
  "border-hidden": "border-style: hidden",
  "border-none": "border-style: none",

  "content-normal": "align-content: normal",
  "content-center": "align-content: center",
  "content-start": "align-content: flex-start",
  "content-end": "align-content: flex-end",
  "content-between": "align-content: space-between",
  "content-around": "align-content: space-around",
  "content-evenly": "align-content: space-evenly",
  "content-baseline": "align-content: baseline",
  "content-stretch": "align-content: stretch",

  "items-start": "align-items: flex-start",
  "items-end": "align-items: flex-end",
  "items-center": "align-items: center",
  "items-baseline": "align-items: baseline",
  "items-stretch": "align-items: stretch",

  "justify-normal": "justify-content: normal",
  "justify-start": "justify-content: flex-start",
  "justify-end": "justify-content: flex-end",
  "justify-center": "justify-content: center",
  "justify-between": "justify-content: space-between",
  "justify-around": "justify-content: space-around",
  "justify-evenly": "justify-content: space-evenly",
  "justify-stretch": "justify-content: stretch",

  "rounded-md": "border-radius: 6px",
  "rounded-lg": "border-radius: 8px",
  "rounded-xl": "border-radius: 12px",
  "rounded-2xl": "border-radius: 16px",

  "text-xs": "font-size: 12px",
  "text-sm": "font-size: 14px",
  "text-base": "font-size: 16px",
  "text-lg": "font-size: 18px",
  "text-xl": "font-size: 20px",
  "text-2xl": "font-size: 24px",
  "text-3xl": "font-size: 30px",

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

  static: "position: static",
  fixed: "position: fixed",
  absolute: "position: absolute",
  relative: "position: relative",
  sticky: "position: sticky",

  "z-0": "z-index: 0",
  "z-10": "z-index: 10",
  "z-20": "z-index: 20",
  "z-30": "z-index: 30",
  "z-40": "z-index: 40",
  "z-50": "z-index: 50",
  "z-auto": "z-index: auto",

  "top-7": "top: 14px",
  "left-5": "left: 10px",

  // ---- Custom ----
  "w-{72}": "width: 72px",
  "w-{250}": "width: 250px",
  "h-{72}": "height: 72px",

  "text-black": "color: #000000",

  "bg-primary-light": "background-color: #362C36",
  "bg-primary-dark": "background-color: #171017",
  "bg-secondary": "background-color: #EFE3C8",

  "border-secondary": "border-color: #EFE3C8",
  "border-secondary-dark": "border-color: #88776F",
};

export function stylish(props: any) {
  const styles = props?.styles?.split(" ").filter((value) => value) || [];
  // console.log("styles", styles);

  const result = styles.reduce((prev, cur) => {
    return prev + " " + STYLE_NAMES[cur] + ";";
  }, "");

  // console.log("result", result);
  return result;
}
