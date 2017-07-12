import assert = require("assert");
import Descriptor from "../src/Models/Descriptor"

describe('To construct a Descriptor', () => {

    describe('given nothing', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('should return an empty Descriptor', () => {
                var d = new Descriptor();
                assert.equal(d.toString().length, 0);
            });   
        });
    });

    describe('given "1"', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('equals "1"', () => {
                var d = new Descriptor("1");
                assert.equal(d.toString(), "1");
            });
        });
    });
        
    describe('given "1-2"', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('equals "1-2"', () => {
                var d = new Descriptor("1-2");
                assert.equal(d.toString(), "1-2");
            });
        });
    });
        
    describe('given "1-?"', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('equals "1-?"', () => {
                var d = new Descriptor("1-?");
                assert.equal(d.toString(), "1-?");
            });
        });
    });
        
    describe('given [1]', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('equals "1"', () => {
                var d = new Descriptor([1]);
                assert.equal(d.toString(), "1");
            });
        });
    });
        
    describe('given [1,2]', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('equals "1-2"', () => {
                var d = new Descriptor([1,2]);
                assert.equal(d.toString(), "1-2");
            });
        });
    });
        
    describe('given [1,-1]', () => {
        describe('when the Descriptor is converted to a string', () => {
            it('equals "1-?"', () => {
                var d = new Descriptor([1,-1]);
                assert.equal(d.toString(), "1-?");
            });
        });
    });
});

describe('To append to an existing Descriptor', () => {

    describe('given an empty Descriptor', () => {
        describe('when appending a 0', () => {
            it('is appended to the converted string', () => {
                var d = new Descriptor();
                d.append(0);
                assert.equal(d.toString(), "0");
            });
        });
    });

    describe('given an empty Descriptor', () => {
        describe('when appending a null', () => {
            it('is appended to the converted string', () => {
                var d = new Descriptor();
                d.append(null);
                assert.equal(d.toString(), "?");
            });
        });
    });

    describe('given a Descriptor with two indices', () => {
        describe('when appending a 3', () => {
            it('is appended to the converted string', () => {
                var d = new Descriptor("1-2");
                d.append(3);
                assert.equal(d.toString(), "1-2-3");
            });
        });
    });

    describe('given a Descriptor with two indices', () => {
        describe('when appending a null', () => {
            it('is appended to the converted string', () => {
                var d = new Descriptor("1-2");
                d.append(null);
                assert.equal(d.toString(), "1-2-?");
            });
        });
    });
});

describe('To iterate over an existing Descriptor', () => {

    describe('given a descriptor with indices', () => {
        it('returns an iterator', () => {
            var d = new Descriptor("1-?-3");
            var it = d.iterator();
            assert.ok(it);
        });

        describe('when getting the next valid index', () => {
            it('returns the expected index', () => {
                var d = new Descriptor("1");
                var it = d.iterator();
                assert.equal(it.next(), 1);
            });
        });

        describe('when getting multiple valid indices', () => {
            it('returns the expected index', () => {
                var d = new Descriptor("4-8-15-16-23-42");
                var it = d.iterator();
                assert.equal(it.next(), 4);
                assert.equal(it.next(), 8);
                assert.equal(it.next(), 15);
                assert.equal(it.next(), 16);
                assert.equal(it.next(), 23);
                assert.equal(it.next(), 42);
            });
        });

        describe('when getting the next null index', () => {
            it('returns a null index', () => {
                var d = new Descriptor("?");
                var it = d.iterator();
                assert.strictEqual(it.next(), null);
            });
        });
    });

    describe('given a descriptor without indices', () => {

        it('returns an iterator', () => {
            var d = new Descriptor();
            var it = d.iterator();
            assert.ok(it);
        });

        describe('when getting the next index', () => {
            it('throws an exception', () => {
                var d = new Descriptor();
                var it = d.iterator();
                assert.throws(() => { it.next(); });
            });
        });
    });

    describe('when the iterator has one null index', () => {
        it('returns an iterator', () => {
            var d = new Descriptor("1-?-3");
            var it = d.iterator();
            assert.ok(it);
        });
    });
});



