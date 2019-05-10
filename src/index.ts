export interface IData {
  [key: string]: any;
}

class Model implements IData {
  [key: string]: any;

  constructor(data?: IData) {
    if (data) {
      Object.keys(data).forEach(key => (this[key] = data[key]));
    }
  }

  public static empty(): Model {
    return new this();
  }

  public static build(data?: IData): Model {
    return new this(data);
  }

  public static buildList(data?: Array<IData>): Array<Model> {
    return data ? data.map((item: IData) => this.build(item)) : [];
  }
}

export default Model;
