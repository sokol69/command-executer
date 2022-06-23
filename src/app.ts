import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor.js';
import { ConsoleLogger } from './core/out/consoleLogger/consoleLogger.js';

export class App {
  async run() {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App();
app.run();