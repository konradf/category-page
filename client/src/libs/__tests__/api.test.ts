import { fetchCategory } from '../api';

describe('api', () => {
  describe('fetchCategory', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('returns first result from categories array', async () => {
      const categoryMock = { name: 'test', articleCount: 10 };

      jest.spyOn(global, 'fetch').mockResolvedValue(({
        ok: true,
        status: 200,
        json: jest.fn().mockResolvedValue({
          data: {
            categories: [categoryMock],
          },
        }),
      } as unknown) as Response);

      await expect(fetchCategory('123')).resolves.toEqual(categoryMock);
    });

    describe('when request is failed', () => {
      it('rejects with given error', async () => {
        jest.spyOn(global, 'fetch').mockRejectedValue({ reason: 'why' });

        await expect(fetchCategory('456')).rejects.toEqual({ reason: 'why' });
      });
    });

    describe('when response is ok, but parsing failed', () => {
      it('rejects with given error', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue(({
          ok: true,
          status: 200,
          json: jest.fn().mockRejectedValue({ success: false }),
        } as unknown) as Response);

        await expect(fetchCategory('789')).rejects.toEqual({ success: false });
      });
    });
  });
});
