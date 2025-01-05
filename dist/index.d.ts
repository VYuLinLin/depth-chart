declare const depthChart: {
  install: (app: any, options?: {
      prefix?: string;
      customNodes?: Record<string, any>;
  }) => void;
};
export {
  depthChart as any,
}
export default depthChart;