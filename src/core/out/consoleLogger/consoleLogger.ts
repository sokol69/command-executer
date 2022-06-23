import { IStreamLogger } from '../../handlers/streamLogger.interface';

export class ConsoleLogger implements IStreamLogger {
  private static instance: ConsoleLogger

  private constructor() {}

  public static getInstance(): ConsoleLogger {
    if (!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger();
    }

    return ConsoleLogger.instance;
  }

  log(...args: any[]) {
    console.log(...args);
  }

  error(...args: any[]) {
    console.error(...args);
  }

  end() {
    console.log('Done');
  }
}