declare module "netlify-cms-app" {
  function registerPreviewTemplate(name: string, component): void;
  function registerMediaLibrary(mediaLibrary: { name: string }): void;
}

type PreviewProps = {
  entry: {
    getIn: (value: string[]) => any;
  };
  widgetFor: (value: string) => any;
};
