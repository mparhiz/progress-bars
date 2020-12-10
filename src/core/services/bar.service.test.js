import BarService from "./bar.service";

const barService = new BarService();
const returnedJson = {
  buttons: [39,42,-9,-43],
  bars:[
    {
      id: 0,
      defaultValue: 87,
      maxValue: 150,
      currentValue: 87,
      selected: true
    },
    {
      id: 1,
      defaultValue: 22,
      maxValue: 150,
      currentValue: 22,
      selected: false
    },
  ]
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(returnedJson),
    })
  )
});

afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  delete global.fetch;
});

test('should returns json', () => {
  return barService.getBars()
    .then(res => {
      expect(res.bars.length).toBe(returnedJson.bars.length);
    });
});
