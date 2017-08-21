'use strict';

var _avaSpec = require('ava-spec');

var jssm = require('../../../build/jssm.es5.js');
/* eslint-disable max-len */

(0, _avaSpec.describe)('parse/1', async function (_parse_it) {

  (0, _avaSpec.describe)('forward arrow', async function (it) {

    var AtoB = [{ "key": "transition", "from": "a", "se": { "kind": "->", "to": "b" } }],
        AdB = [{ "key": "transition", "from": "a", "se": { "kind": "->", "to": "b", "l_desc": [{ "key": "arc_label", "value": "d" }] } }],
        ABd = [{ "key": "transition", "from": "a", "se": { "kind": "->", "to": "b", "r_desc": [{ "key": "arc_label", "value": "d" }] } }],
        AdBd = [{ "key": "transition", "from": "a", "se": { "kind": "->", "to": "b", "l_desc": [{ "key": "arc_label", "value": "d" }], "r_desc": [{ "key": "arc_label", "value": "f" }] } }];

    var echo_equal = function echo_equal(testt, validator) {
      return it(_avaSpec.test, function (t) {
        return t.deepEqual(validator, jssm.parse(testt));
      });
    };

    var ShouldEqualAtoB = ['a->b;', 'a ->b;', 'a-> b;', 'a -> b;', 'a{}->b;', 'a->{}b;', 'a{}->{}b;'];
    ShouldEqualAtoB.map(function (p) {
      return echo_equal(p, AtoB);
    });

    echo_equal('a{arc_label:d;}->b;', AdB);
    echo_equal('a{arc_label:"d";}->b;', AdB);
    echo_equal('a->{arc_label:d;}b;', ABd);
    echo_equal('a{arc_label:d;}->{arc_label:f;}b;', AdBd);
  });

  (0, _avaSpec.describe)('double arrow', async function (it) {

    var AtoB = [{ "key": "transition", "from": "a", "se": { "kind": "<->", "to": "b" } }],
        AdB = [{ "key": "transition", "from": "a", "se": { "kind": "<->", "to": "b", "l_desc": [{ "key": "arc_label", "value": "d" }] } }],
        ABd = [{ "key": "transition", "from": "a", "se": { "kind": "<->", "to": "b", "r_desc": [{ "key": "arc_label", "value": "d" }] } }],
        AdBd = [{ "key": "transition", "from": "a", "se": { "kind": "<->", "to": "b", "l_desc": [{ "key": "arc_label", "value": "d" }], "r_desc": [{ "key": "arc_label", "value": "f" }] } }];

    var echo_equal = function echo_equal(testt, validator) {
      return it(_avaSpec.test, function (t) {
        return t.deepEqual(validator, jssm.parse(testt));
      });
    };

    var ShouldEqualAtoB = ['a<->b;', 'a <->b;', 'a<-> b;', 'a <-> b;', 'a{}<->b;', 'a<->{}b;', 'a{}<->{}b;'];
    ShouldEqualAtoB.map(function (p) {
      return echo_equal(p, AtoB);
    });

    echo_equal('a{arc_label:d;}<->b;', AdB);
    echo_equal('a{arc_label:"d";}<->b;', AdB);
    echo_equal('a<->{arc_label:d;}b;', ABd);
    echo_equal('a{arc_label:d;}<->{arc_label:f;}b;', AdBd);
  });

  (0, _avaSpec.describe)('chain', async function (it) {
    var AtoBtoC = [{ "key": "transition", "from": "a", "se": { "kind": "->", "to": "b", "se": { "kind": "->", "to": "c" } } }];
    it('a->b->c;', function (t) {
      return t.deepEqual(AtoBtoC, jssm.parse('a->b->c;'));
    });
  });

  (0, _avaSpec.describe)('sequence', async function (it) {
    var AtoB_CtoD = [{ "key": "transition", "from": "a", "se": { "kind": "->", "to": "b" } }, { "key": "transition", "from": "c", "se": { "kind": "->", "to": "d" } }];
    it('a->b;c->d;', function (t) {
      return t.deepEqual(AtoB_CtoD, jssm.parse('a->b;c->d;'));
    });
  });

  // todo: graph: {inputs: [foo]}
  // todo: graph: {outputs: [foo]}

  (0, _avaSpec.describe)('torture', async function (it) {

    var augh = '\n      a->b-> c-> d -> e\n->\nf <- g <= h <-> i <=> j ~> k <~ l <~> m <~-> n <-~> o <=~> p <~=> q <-=> r <=-> s \'A\' <= \'B\' t;';

    it('doesn\'t throw', function (t) {
      return t.notThrows(function () {
        jssm.parse(augh);
      });
    });
  });
});

// stochable
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qcy90ZXN0cy9wYXJzZS5qcyJdLCJuYW1lcyI6WyJqc3NtIiwicmVxdWlyZSIsIl9wYXJzZV9pdCIsIml0IiwiQXRvQiIsIkFkQiIsIkFCZCIsIkFkQmQiLCJlY2hvX2VxdWFsIiwidGVzdHQiLCJ2YWxpZGF0b3IiLCJ0IiwiZGVlcEVxdWFsIiwicGFyc2UiLCJTaG91bGRFcXVhbEF0b0IiLCJtYXAiLCJwIiwiQXRvQnRvQyIsIkF0b0JfQ3RvRCIsImF1Z2giLCJub3RUaHJvd3MiXSwibWFwcGluZ3MiOiI7O0FBR0E7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSw0QkFBUixDQUFiO0FBSkE7O0FBVUEsdUJBQVMsU0FBVCxFQUFvQixnQkFBTUMsU0FBTixFQUFtQjs7QUFFbkMseUJBQVMsZUFBVCxFQUEwQixnQkFBTUMsRUFBTixFQUFZOztBQUVwQyxRQUFNQyxPQUFPLENBQUMsRUFBQyxPQUFPLFlBQVIsRUFBc0IsUUFBUSxHQUE5QixFQUFtQyxNQUFNLEVBQUMsUUFBUSxJQUFULEVBQWMsTUFBTSxHQUFwQixFQUF6QyxFQUFELENBQWI7QUFBQSxRQUNNQyxNQUFPLENBQUMsRUFBQyxPQUFPLFlBQVIsRUFBc0IsUUFBUSxHQUE5QixFQUFtQyxNQUFNLEVBQUMsUUFBUSxJQUFULEVBQWMsTUFBTSxHQUFwQixFQUF3QixVQUFVLENBQUMsRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxHQUEzQixFQUFELENBQWxDLEVBQXpDLEVBQUQsQ0FEYjtBQUFBLFFBRU1DLE1BQU8sQ0FBQyxFQUFDLE9BQU8sWUFBUixFQUFzQixRQUFRLEdBQTlCLEVBQW1DLE1BQU0sRUFBQyxRQUFRLElBQVQsRUFBYyxNQUFNLEdBQXBCLEVBQXdCLFVBQVUsQ0FBQyxFQUFDLE9BQU0sV0FBUCxFQUFtQixTQUFRLEdBQTNCLEVBQUQsQ0FBbEMsRUFBekMsRUFBRCxDQUZiO0FBQUEsUUFHTUMsT0FBTyxDQUFDLEVBQUMsT0FBTyxZQUFSLEVBQXNCLFFBQVEsR0FBOUIsRUFB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QyxDQUFMO0FBQUEsS0FBckI7QUFFRCxHQVREO0FBV0gsQ0FoRUQ7O0FBa0VBIiwiZmlsZSI6InBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbmltcG9ydCB7dGVzdCwgZGVzY3JpYmV9IGZyb20gJ2F2YS1zcGVjJztcblxuY29uc3QganNzbSA9IHJlcXVpcmUoJy4uLy4uLy4uL2J1aWxkL2pzc20uZXM1LmpzJyk7XG5cblxuXG5cblxuZGVzY3JpYmUoJ3BhcnNlLzEnLCBhc3luYyBfcGFyc2VfaXQgPT4ge1xuXG4gICAgZGVzY3JpYmUoJ2ZvcndhcmQgYXJyb3cnLCBhc3luYyBpdCA9PiB7XG5cbiAgICAgIGNvbnN0IEF0b0IgPSBbe1wia2V5XCI6IFwidHJhbnNpdGlvblwiLCBcImZyb21cIjogXCJhXCIsIFwic2VcIjoge1wia2luZFwiOiBcIi0+XCIsXCJ0b1wiOiBcImJcIn19XSxcbiAgICAgICAgICAgIEFkQiAgPSBbe1wia2V5XCI6IFwidHJhbnNpdGlvblwiLCBcImZyb21cIjogXCJhXCIsIFwic2VcIjoge1wia2luZFwiOiBcIi0+XCIsXCJ0b1wiOiBcImJcIixcImxfZGVzY1wiOiBbe1wia2V5XCI6XCJhcmNfbGFiZWxcIixcInZhbHVlXCI6XCJkXCJ9XX19XSxcbiAgICAgICAgICAgIEFCZCAgPSBbe1wia2V5XCI6IFwidHJhbnNpdGlvblwiLCBcImZyb21cIjogXCJhXCIsIFwic2VcIjoge1wia2luZFwiOiBcIi0+XCIsXCJ0b1wiOiBcImJcIixcInJfZGVzY1wiOiBbe1wia2V5XCI6XCJhcmNfbGFiZWxcIixcInZhbHVlXCI6XCJkXCJ9XX19XSxcbiAgICAgICAgICAgIEFkQmQgPSBbe1wia2V5XCI6IFwidHJhbnNpdGlvblwiLCBcImZyb21cIjogXCJhXCIsIFwic2VcIjoge1wia2luZFwiOiBcIi0+XCIsXCJ0b1wiOiBcImJcIixcImxfZGVzY1wiOiBbe1wia2V5XCI6XCJhcmNfbGFiZWxcIixcInZhbHVlXCI6XCJkXCJ9XSxcInJfZGVzY1wiOiBbe1wia2V5XCI6XCJhcmNfbGFiZWxcIixcInZhbHVlXCI6XCJmXCJ9XX19XTtcblxuICAgICAgY29uc3QgZWNob19lcXVhbCA9ICh0ZXN0dCwgdmFsaWRhdG9yKSA9PiBpdCh0ZXN0LCB0ID0+IHQuZGVlcEVxdWFsKHZhbGlkYXRvciwganNzbS5wYXJzZSh0ZXN0dCkpKTtcblxuICAgICAgY29uc3QgU2hvdWxkRXF1YWxBdG9CID0gWydhLT5iOycsICdhIC0+YjsnLCAnYS0+IGI7JywgJ2EgLT4gYjsnLCAnYXt9LT5iOycsICdhLT57fWI7JywgJ2F7fS0+e31iOyddO1xuICAgICAgU2hvdWxkRXF1YWxBdG9CLm1hcChwID0+IGVjaG9fZXF1YWwocCwgQXRvQikpO1xuXG4gICAgICBlY2hvX2VxdWFsKCdhe2FyY19sYWJlbDpkO30tPmI7JywgICAgICAgICAgICAgICBBZEIpO1xuICAgICAgZWNob19lcXVhbCgnYXthcmNfbGFiZWw6XCJkXCI7fS0+YjsnLCAgICAgICAgICAgICBBZEIpO1xuICAgICAgZWNob19lcXVhbCgnYS0+e2FyY19sYWJlbDpkO31iOycsICAgICAgICAgICAgICAgQUJkKTtcbiAgICAgIGVjaG9fZXF1YWwoJ2F7YXJjX2xhYmVsOmQ7fS0+e2FyY19sYWJlbDpmO31iOycsIEFkQmQpO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZG91YmxlIGFycm93JywgYXN5bmMgaXQgPT4ge1xuXG4gICAgICBjb25zdCBBdG9CID0gW3tcImtleVwiOiBcInRyYW5zaXRpb25cIiwgXCJmcm9tXCI6IFwiYVwiLCBcInNlXCI6IHtcImtpbmRcIjogXCI8LT5cIixcInRvXCI6IFwiYlwifX1dLFxuICAgICAgICAgICAgQWRCICA9IFt7XCJrZXlcIjogXCJ0cmFuc2l0aW9uXCIsIFwiZnJvbVwiOiBcImFcIiwgXCJzZVwiOiB7XCJraW5kXCI6IFwiPC0+XCIsXCJ0b1wiOiBcImJcIixcImxfZGVzY1wiOiBbe1wia2V5XCI6XCJhcmNfbGFiZWxcIixcInZhbHVlXCI6XCJkXCJ9XX19XSxcbiAgICAgICAgICAgIEFCZCAgPSBbe1wia2V5XCI6IFwidHJhbnNpdGlvblwiLCBcImZyb21cIjogXCJhXCIsIFwic2VcIjoge1wia2luZFwiOiBcIjwtPlwiLFwidG9cIjogXCJiXCIsXCJyX2Rlc2NcIjogW3tcImtleVwiOlwiYXJjX2xhYmVsXCIsXCJ2YWx1ZVwiOlwiZFwifV19fV0sXG4gICAgICAgICAgICBBZEJkID0gW3tcImtleVwiOiBcInRyYW5zaXRpb25cIiwgXCJmcm9tXCI6IFwiYVwiLCBcInNlXCI6IHtcImtpbmRcIjogXCI8LT5cIixcInRvXCI6IFwiYlwiLFwibF9kZXNjXCI6IFt7XCJrZXlcIjpcImFyY19sYWJlbFwiLFwidmFsdWVcIjpcImRcIn1dLFwicl9kZXNjXCI6IFt7XCJrZXlcIjpcImFyY19sYWJlbFwiLFwidmFsdWVcIjpcImZcIn1dfX1dO1xuXG4gICAgICBjb25zdCBlY2hvX2VxdWFsID0gKHRlc3R0LCB2YWxpZGF0b3IpID0+IGl0KHRlc3QsIHQgPT4gdC5kZWVwRXF1YWwodmFsaWRhdG9yLCBqc3NtLnBhcnNlKHRlc3R0KSkpO1xuXG4gICAgICBjb25zdCBTaG91bGRFcXVhbEF0b0IgPSBbJ2E8LT5iOycsICdhIDwtPmI7JywgJ2E8LT4gYjsnLCAnYSA8LT4gYjsnLCAnYXt9PC0+YjsnLCAnYTwtPnt9YjsnLCAnYXt9PC0+e31iOyddO1xuICAgICAgU2hvdWxkRXF1YWxBdG9CLm1hcChwID0+IGVjaG9fZXF1YWwocCwgQXRvQikpO1xuXG4gICAgICBlY2hvX2VxdWFsKCdhe2FyY19sYWJlbDpkO308LT5iOycsICAgICAgICAgICAgICAgQWRCKTtcbiAgICAgIGVjaG9fZXF1YWwoJ2F7YXJjX2xhYmVsOlwiZFwiO308LT5iOycsICAgICAgICAgICAgIEFkQik7XG4gICAgICBlY2hvX2VxdWFsKCdhPC0+e2FyY19sYWJlbDpkO31iOycsICAgICAgICAgICAgICAgQUJkKTtcbiAgICAgIGVjaG9fZXF1YWwoJ2F7YXJjX2xhYmVsOmQ7fTwtPnthcmNfbGFiZWw6Zjt9YjsnLCBBZEJkKTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ2NoYWluJywgYXN5bmMgaXQgPT4ge1xuICAgICAgY29uc3QgQXRvQnRvQyA9IFt7XCJrZXlcIjpcInRyYW5zaXRpb25cIixcImZyb21cIjpcImFcIixcInNlXCI6e1wia2luZFwiOlwiLT5cIixcInRvXCI6XCJiXCIsXCJzZVwiOntcImtpbmRcIjpcIi0+XCIsXCJ0b1wiOlwiY1wifX19XTtcbiAgICAgIGl0KCdhLT5iLT5jOycsIHQgPT4gdC5kZWVwRXF1YWwoQXRvQnRvQywganNzbS5wYXJzZSgnYS0+Yi0+YzsnKSApKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdzZXF1ZW5jZScsIGFzeW5jIGl0ID0+IHtcbiAgICAgIGNvbnN0IEF0b0JfQ3RvRCA9IFt7XCJrZXlcIjpcInRyYW5zaXRpb25cIixcImZyb21cIjpcImFcIixcInNlXCI6e1wia2luZFwiOlwiLT5cIixcInRvXCI6XCJiXCJ9fSx7XCJrZXlcIjpcInRyYW5zaXRpb25cIixcImZyb21cIjpcImNcIixcInNlXCI6e1wia2luZFwiOlwiLT5cIixcInRvXCI6XCJkXCJ9fV07XG4gICAgICBpdCgnYS0+YjtjLT5kOycsIHQgPT4gdC5kZWVwRXF1YWwoQXRvQl9DdG9ELCBqc3NtLnBhcnNlKCdhLT5iO2MtPmQ7JykgKSk7XG4gICAgfSk7XG5cbiAgICAvLyB0b2RvOiBncmFwaDoge2lucHV0czogW2Zvb119XG4gICAgLy8gdG9kbzogZ3JhcGg6IHtvdXRwdXRzOiBbZm9vXX1cblxuICAgIGRlc2NyaWJlKCd0b3J0dXJlJywgYXN5bmMgaXQgPT4ge1xuXG4gICAgICBjb25zdCBhdWdoID0gYFxuICAgICAgYS0+Yi0+IGMtPiBkIC0+IGVcbi0+XG5mIDwtIGcgPD0gaCA8LT4gaSA8PT4gaiB+PiBrIDx+IGwgPH4+IG0gPH4tPiBuIDwtfj4gbyA8PX4+IHAgPH49PiBxIDwtPT4gciA8PS0+IHMgJ0EnIDw9ICdCJyB0O2A7XG5cbiAgICAgIGl0KCdkb2VzblxcJ3QgdGhyb3cnLCB0ID0+IHQubm90VGhyb3dzKCgpID0+IHsganNzbS5wYXJzZShhdWdoKTsgfSkgKTtcblxuICAgIH0pO1xuXG59KTtcblxuLy8gc3RvY2hhYmxlXG4iXX0=