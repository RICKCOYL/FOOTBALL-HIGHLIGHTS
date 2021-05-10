import { changefilter } from '../../actions/index';
import catfilter from '../filter';

describe('filterReducer', () => {
  const payload = 'Shot';
  it('returns a category to filter when action is "FILTER"', () => {
    expect(catfilter('', changefilter(payload))).toEqual('Shot');
  });

  it('returns the current state if "FILTER" is not the action received', () => {
    expect(catfilter('State', { type: 'OTHER' })).toEqual('State');
  });

  it('returns an empty string of the state passed is undefined, and action is not "FILTER', () => {
    expect(catfilter(undefined, { type: 'OTHER' })).toBe('ENGLAND: Premier League');
  });
});
