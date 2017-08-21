'use strict';

var _avaSpec = require('ava-spec');

var jssm = require('../../../build/jssm.es5.js');
/* eslint-disable max-len */

(0, _avaSpec.describe)('array on left', async function (it) {

  var aLeft = [{ main_path: false, forced_only: false, "from": "a", "to": "d", "kind": "legal" }, { main_path: false, forced_only: false, "from": "b", "to": "d", "kind": "legal" }, { main_path: false, forced_only: false, "from": "c", "to": "d", "kind": "legal" }];

  it('[a b c]->d;', function (t) {
    return t.deepEqual(aLeft, jssm.compile(jssm.parse('[a b c]->d;')).transitions);
  });
});

(0, _avaSpec.describe)('array on right', async function (it) {

  var aRight = [{ main_path: false, forced_only: false, "from": "a", "to": "b", "kind": "legal" }, { main_path: false, forced_only: false, "from": "a", "to": "c", "kind": "legal" }, { main_path: false, forced_only: false, "from": "a", "to": "d", "kind": "legal" }];

  it('a->[b c d];', function (t) {
    return t.deepEqual(aRight, jssm.compile(jssm.parse('a->[b c d];')).transitions);
  });
});

(0, _avaSpec.describe)('array on both sides', async function (it) {

  var aBoth = [{ main_path: false, forced_only: false, "from": "a", "to": "x", "kind": "legal" }, { main_path: false, forced_only: false, "from": "a", "to": "y", "kind": "legal" }, { main_path: false, forced_only: false, "from": "a", "to": "z", "kind": "legal" }, { main_path: false, forced_only: false, "from": "b", "to": "x", "kind": "legal" }, { main_path: false, forced_only: false, "from": "b", "to": "y", "kind": "legal" }, { main_path: false, forced_only: false, "from": "b", "to": "z", "kind": "legal" }, { main_path: false, forced_only: false, "from": "c", "to": "x", "kind": "legal" }, { main_path: false, forced_only: false, "from": "c", "to": "y", "kind": "legal" }, { main_path: false, forced_only: false, "from": "c", "to": "z", "kind": "legal" }];

  it('[a b c]->[x y z];', function (t) {
    return t.deepEqual(aBoth, jssm.compile(jssm.parse('[a b c]->[x y z];')).transitions);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy90ZXN0cy9hcnJheV90cmFuc2l0aW9ucy5qcyJdLCJuYW1lcyI6WyJqc3NtIiwicmVxdWlyZSIsIml0IiwiYUxlZnQiLCJtYWluX3BhdGgiLCJmb3JjZWRfb25seSIsInQiLCJkZWVwRXF1YWwiLCJjb21waWxlIiwicGFyc2UiLCJ0cmFuc2l0aW9ucyIsImFSaWdodCIsImFCb3RoIl0sIm1hcHBpbmdzIjoiOztBQUdBOztBQUVBLElBQU1BLE9BQU9DLFFBQVEsNEJBQVIsQ0FBYjtBQUpBOztBQVVBLHVCQUFTLGVBQVQsRUFBMEIsZ0JBQU1DLEVBQU4sRUFBWTs7QUFFcEMsTUFBTUMsUUFBUSxDQUNaLEVBQUNDLFdBQVcsS0FBWixFQUFrQkMsYUFBYSxLQUEvQixFQUFxQyxRQUFPLEdBQTVDLEVBQWdELE1BQUssR0FBckQsRUFBeUQsUUFBTyxPQUFoRSxFQURZLEVBRVosRUFBQ0QsV0FBVyxLQUFaLEVBQWtCQyxhQUFhLEtBQS9CLEVBQXFDLFFBQU8sR0FBNUMsRUFBZ0QsTUFBSyxHQUFyRCxFQUF5RCxRQUFPLE9BQWhFLEVBRlksRUFHWixFQUFDRCxXQUFXLEtBQVosRUFBa0JDLGFBQWEsS0FBL0IsRUFBcUMsUUFBTyxHQUE1QyxFQUFnRCxNQUFLLEdBQXJELEVBQXlELFFBQU8sT0FBaEUsRUFIWSxDQUFkOztBQU1BSCxLQUFHLGFBQUgsRUFBa0I7QUFBQSxXQUFLSSxFQUFFQyxTQUFGLENBQVlKLEtBQVosRUFBbUJILEtBQUtRLE9BQUwsQ0FBYVIsS0FBS1MsS0FBTCxDQUFXLGFBQVgsQ0FBYixFQUF3Q0MsV0FBM0QsQ0FBTDtBQUFBLEdBQWxCO0FBRUQsQ0FWRDs7QUFnQkEsdUJBQVMsZ0JBQVQsRUFBMkIsZ0JBQU1SLEVBQU4sRUFBWTs7QUFFckMsTUFBTVMsU0FBUyxDQUNiLEVBQUNQLFdBQVcsS0FBWixFQUFrQkMsYUFBYSxLQUEvQixFQUFxQyxRQUFPLEdBQTVDLEVBQWdELE1BQUssR0FBckQsRUFBeUQsUUFBTyxPQUFoRSxFQURhLEVBRWIsRUFBQ0QsV0FBVyxLQUFaLEVBQWtCQyxhQUFhLEtBQS9CLEVBQXFDLFFBQU8sR0FBNUMsRUFBZ0QsTUFBSyxHQUFyRCxFQUF5RCxRQUFPLE9BQWhFLEVBRmEsRUFHYixFQUFDRCxXQUFXLEtBQVosRUFBa0JDLGFBQWEsS0FBL0IsRUFBcUMsUUFBTyxHQUE1QyxFQUFnRCxNQUFLLEdBQXJELEVBQXlELFFBQU8sT0FBaEUsRUFIYSxDQUFmOztBQU1BSCxLQUFHLGFBQUgsRUFBa0I7QUFBQSxXQUFLSSxFQUFFQyxTQUFGLENBQVlJLE1BQVosRUFBb0JYLEtBQUtRLE9BQUwsQ0FBYVIsS0FBS1MsS0FBTCxDQUFXLGFBQVgsQ0FBYixFQUF3Q0MsV0FBNUQsQ0FBTDtBQUFBLEdBQWxCO0FBRUQsQ0FWRDs7QUFnQkEsdUJBQVMscUJBQVQsRUFBZ0MsZ0JBQU1SLEVBQU4sRUFBWTs7QUFFMUMsTUFBTVUsUUFBUSxDQUNaLEVBQUNSLFdBQVcsS0FBWixFQUFrQkMsYUFBYSxLQUEvQixFQUFxQyxRQUFPLEdBQTVDLEVBQWdELE1BQUssR0FBckQsRUFBeUQsUUFBTyxPQUFoRSxFQURZLEVBRVosRUFBQ0QsV0FBVyxLQUFaLEVBQWtCQyxhQUFhLEtBQS9CLEVBQXFDLFFBQU8sR0FBNUMsRUFBZ0QsTUFBSyxHQUFyRCxFQUF5RCxRQUFPLE9BQWhFLEVBRlksRUFHWixFQUFDRCxXQUFXLEtBQVosRUFBa0JDLGFBQWEsS0FBL0IsRUFBcUMsUUFBTyxHQUE1QyxFQUFnRCxNQUFLLEdBQXJELEVBQXlELFFBQU8sT0FBaEUsRUFIWSxFQUlaLEVBQUNELFdBQVcsS0FBWixFQUFrQkMsYUFBYSxLQUEvQixFQUFxQyxRQUFPLEdBQTVDLEVBQWdELE1BQUssR0FBckQsRUFBeUQsUUFBTyxPQUFoRSxFQUpZLEVBS1osRUFBQ0QsV0FBVyxLQUFaLEVBQWtCQyxhQUFhLEtBQS9CLEVBQXFDLFFBQU8sR0FBNUMsRUFBZ0QsTUFBSyxHQUFyRCxFQUF5RCxRQUFPLE9BQWhFLEVBTFksRUFNWixFQUFDRCxXQUFXLEtBQVosRUFBa0JDLGFBQWEsS0FBL0IsRUFBcUMsUUFBTyxHQUE1QyxFQUFnRCxNQUFLLEdBQXJELEVBQXlELFFBQU8sT0FBaEUsRUFOWSxFQU9aLEVBQUNELFdBQVcsS0FBWixFQUFrQkMsYUFBYSxLQUEvQixFQUFxQyxRQUFPLEdBQTVDLEVBQWdELE1BQUssR0FBckQsRUFBeUQsUUFBTyxPQUFoRSxFQVBZLEVBUVosRUFBQ0QsV0FBVyxLQUFaLEVBQWtCQyxhQUFhLEtBQS9CLEVBQXFDLFFBQU8sR0FBNUMsRUFBZ0QsTUFBSyxHQUFyRCxFQUF5RCxRQUFPLE9BQWhFLEVBUlksRUFTWixFQUFDRCxXQUFXLEtBQVosRUFBa0JDLGFBQWEsS0FBL0IsRUFBcUMsUUFBTyxHQUE1QyxFQUFnRCxNQUFLLEdBQXJELEVBQXlELFFBQU8sT0FBaEUsRUFUWSxDQUFkOztBQVlBSCxLQUFHLG1CQUFILEVBQXdCO0FBQUEsV0FBS0ksRUFBRUMsU0FBRixDQUFZSyxLQUFaLEVBQW1CWixLQUFLUSxPQUFMLENBQWFSLEtBQUtTLEtBQUwsQ0FBVyxtQkFBWCxDQUFiLEVBQThDQyxXQUFqRSxDQUFMO0FBQUEsR0FBeEI7QUFFRCxDQWhCRCIsImZpbGUiOiJhcnJheV90cmFuc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuXG5pbXBvcnQge2Rlc2NyaWJlfSBmcm9tICdhdmEtc3BlYyc7XG5cbmNvbnN0IGpzc20gPSByZXF1aXJlKCcuLi8uLi8uLi9idWlsZC9qc3NtLmVzNS5qcycpO1xuXG5cblxuXG5cbmRlc2NyaWJlKCdhcnJheSBvbiBsZWZ0JywgYXN5bmMgaXQgPT4ge1xuXG4gIGNvbnN0IGFMZWZ0ID0gW1xuICAgIHttYWluX3BhdGg6IGZhbHNlLGZvcmNlZF9vbmx5OiBmYWxzZSxcImZyb21cIjpcImFcIixcInRvXCI6XCJkXCIsXCJraW5kXCI6XCJsZWdhbFwifSxcbiAgICB7bWFpbl9wYXRoOiBmYWxzZSxmb3JjZWRfb25seTogZmFsc2UsXCJmcm9tXCI6XCJiXCIsXCJ0b1wiOlwiZFwiLFwia2luZFwiOlwibGVnYWxcIn0sXG4gICAge21haW5fcGF0aDogZmFsc2UsZm9yY2VkX29ubHk6IGZhbHNlLFwiZnJvbVwiOlwiY1wiLFwidG9cIjpcImRcIixcImtpbmRcIjpcImxlZ2FsXCJ9XG4gIF07XG5cbiAgaXQoJ1thIGIgY10tPmQ7JywgdCA9PiB0LmRlZXBFcXVhbChhTGVmdCwganNzbS5jb21waWxlKGpzc20ucGFyc2UoJ1thIGIgY10tPmQ7JykpLnRyYW5zaXRpb25zICkpO1xuXG59KTtcblxuXG5cblxuXG5kZXNjcmliZSgnYXJyYXkgb24gcmlnaHQnLCBhc3luYyBpdCA9PiB7XG5cbiAgY29uc3QgYVJpZ2h0ID0gW1xuICAgIHttYWluX3BhdGg6IGZhbHNlLGZvcmNlZF9vbmx5OiBmYWxzZSxcImZyb21cIjpcImFcIixcInRvXCI6XCJiXCIsXCJraW5kXCI6XCJsZWdhbFwifSxcbiAgICB7bWFpbl9wYXRoOiBmYWxzZSxmb3JjZWRfb25seTogZmFsc2UsXCJmcm9tXCI6XCJhXCIsXCJ0b1wiOlwiY1wiLFwia2luZFwiOlwibGVnYWxcIn0sXG4gICAge21haW5fcGF0aDogZmFsc2UsZm9yY2VkX29ubHk6IGZhbHNlLFwiZnJvbVwiOlwiYVwiLFwidG9cIjpcImRcIixcImtpbmRcIjpcImxlZ2FsXCJ9XG4gIF07XG5cbiAgaXQoJ2EtPltiIGMgZF07JywgdCA9PiB0LmRlZXBFcXVhbChhUmlnaHQsIGpzc20uY29tcGlsZShqc3NtLnBhcnNlKCdhLT5bYiBjIGRdOycpKS50cmFuc2l0aW9ucyApKTtcblxufSk7XG5cblxuXG5cblxuZGVzY3JpYmUoJ2FycmF5IG9uIGJvdGggc2lkZXMnLCBhc3luYyBpdCA9PiB7XG5cbiAgY29uc3QgYUJvdGggPSBbXG4gICAge21haW5fcGF0aDogZmFsc2UsZm9yY2VkX29ubHk6IGZhbHNlLFwiZnJvbVwiOlwiYVwiLFwidG9cIjpcInhcIixcImtpbmRcIjpcImxlZ2FsXCJ9LFxuICAgIHttYWluX3BhdGg6IGZhbHNlLGZvcmNlZF9vbmx5OiBmYWxzZSxcImZyb21cIjpcImFcIixcInRvXCI6XCJ5XCIsXCJraW5kXCI6XCJsZWdhbFwifSxcbiAgICB7bWFpbl9wYXRoOiBmYWxzZSxmb3JjZWRfb25seTogZmFsc2UsXCJmcm9tXCI6XCJhXCIsXCJ0b1wiOlwielwiLFwia2luZFwiOlwibGVnYWxcIn0sXG4gICAge21haW5fcGF0aDogZmFsc2UsZm9yY2VkX29ubHk6IGZhbHNlLFwiZnJvbVwiOlwiYlwiLFwidG9cIjpcInhcIixcImtpbmRcIjpcImxlZ2FsXCJ9LFxuICAgIHttYWluX3BhdGg6IGZhbHNlLGZvcmNlZF9vbmx5OiBmYWxzZSxcImZyb21cIjpcImJcIixcInRvXCI6XCJ5XCIsXCJraW5kXCI6XCJsZWdhbFwifSxcbiAgICB7bWFpbl9wYXRoOiBmYWxzZSxmb3JjZWRfb25seTogZmFsc2UsXCJmcm9tXCI6XCJiXCIsXCJ0b1wiOlwielwiLFwia2luZFwiOlwibGVnYWxcIn0sXG4gICAge21haW5fcGF0aDogZmFsc2UsZm9yY2VkX29ubHk6IGZhbHNlLFwiZnJvbVwiOlwiY1wiLFwidG9cIjpcInhcIixcImtpbmRcIjpcImxlZ2FsXCJ9LFxuICAgIHttYWluX3BhdGg6IGZhbHNlLGZvcmNlZF9vbmx5OiBmYWxzZSxcImZyb21cIjpcImNcIixcInRvXCI6XCJ5XCIsXCJraW5kXCI6XCJsZWdhbFwifSxcbiAgICB7bWFpbl9wYXRoOiBmYWxzZSxmb3JjZWRfb25seTogZmFsc2UsXCJmcm9tXCI6XCJjXCIsXCJ0b1wiOlwielwiLFwia2luZFwiOlwibGVnYWxcIn1cbiAgXTtcblxuICBpdCgnW2EgYiBjXS0+W3ggeSB6XTsnLCB0ID0+IHQuZGVlcEVxdWFsKGFCb3RoLCBqc3NtLmNvbXBpbGUoanNzbS5wYXJzZSgnW2EgYiBjXS0+W3ggeSB6XTsnKSkudHJhbnNpdGlvbnMgKSk7XG5cbn0pO1xuIl19