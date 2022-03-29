import picgo from "picgo";
import dayjs from "dayjs";
import path from "path";

const DEFAULT_TIME_FORMAT = "YYYY-MM-DD--HH-mm-ss";
const DEFAULT_FILENAME_FORMAT = "${time}_${width}x${height}_${filename}";

interface IInfoUrlPluginConfig {
  timeFormat?: string;
  filenameFormat?: string;
}

function loadConfig(ctx: picgo): IInfoUrlPluginConfig {
  const config = (ctx.getConfig("picgo-plugin-info-url") ||
    {}) as IInfoUrlPluginConfig;
  return config;
}

function handle(ctx: picgo) {
  const output = ctx.output;
  output.forEach((item) => {
    const {
      timeFormat = DEFAULT_TIME_FORMAT,
      filenameFormat = DEFAULT_FILENAME_FORMAT,
    } = loadConfig(ctx);
    const { fileName, width, height, extname } = item;
    const time = dayjs().format(timeFormat);
    const filename = path.parse(fileName).name;

    const newFileName = filenameFormat
      .replace("${width}", "" + width)
      .replace("${height}", "" + height)
      .replace("${filename}", filename)
      .replace("${time}", time);

    item.fileName = `${newFileName}${extname}`;
  });
}

const getConfig = (ctx) => {
  let config = loadConfig(ctx);
  return [
    {
      name: "timeFormat",
      type: "input",
      alias: "文件名时间格式",
      default: config.timeFormat || "",
      message: `例如 ${DEFAULT_TIME_FORMAT}`,
      required: false,
    },
    {
      name: "filenameFormat",
      type: "input",
      alias: "文件名格式",
      default: config.filenameFormat || "",
      message: `例如 ${DEFAULT_FILENAME_FORMAT}`,
      required: false,
    },
  ];
};

export = (ctx: picgo) => {
  const register = () => {
    ctx.helper.beforeUploadPlugins.register("info-url", {
      handle,
      config: getConfig,
    });
  };
  return {
    register,
    config: getConfig,
  };
};
