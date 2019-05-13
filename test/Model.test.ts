import IData from '../src/IData';
import Model from '../src/Model';

class ChildModel extends Model {
  // no extra fields
}

class GrandChildModel extends Model {
  public static build(data?: IData): GrandChildModel {
    const instance = super.build(data) as GrandChildModel;

    if (data && data.child) {
      instance.child = data.child
        ? ChildModel.build(data.child)
        : ChildModel.empty();
    }

    return instance;
  }
}

describe('ChildModel work', () => {
  it('ChildModel knows own class and can be created empty', () => {
    const instance = ChildModel.empty();
    expect(instance.getClassName()).toBe('ChildModel');
    expect(instance).toEqual({});
  });

  it('ChildModel can be build as empty', () => {
    const instance = ChildModel.build();
    expect(instance).toEqual({});
  });

  it('ChildModel can be build non-empty', () => {
    const data: IData = {
      foo: 1,
      bar: 'this is bar',
    };

    const instance = ChildModel.build(data);
    expect(instance).toEqual(data);
  });

  it('ChildModel can build a list', () => {
    const dataArray: IData[] = [
      {
        foo: 1,
      },
      {
        foo: 2,
        bar: 3,
      },
    ];

    const instances = ChildModel.buildList(dataArray);
    expect(instances).toEqual(dataArray);
  });
});

describe('GrandChildModel work', () => {
  it('GrandChildModel can be created', () => {
    const data = {
      foo: 999,
      bar: 'sup?',
      child: {
        a: 1,
        b: 2,
      },
    };

    const instance = GrandChildModel.build(data);
    expect(instance).toEqual(data);
    expect(instance.getClassName()).toBe('GrandChildModel');
    expect(instance.child.getClassName()).toBe('ChildModel');
  });
});
