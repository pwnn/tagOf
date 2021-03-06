describe( 'tagOf' , function () {

    it( 'null' , function () {
        expect( tagOf( null ) ).toBe( 'null' )
    } )

    it( 'undefined' , function () {
        expect( tagOf( void 0 ) ).toBe( 'undefined' )
    } )

    it( 'number' , function () {
        expect( tagOf( 0 ) ).toBe( 'number' )
        expect( tagOf( 0 / 0 ) ).toBe( 'number' )
        expect( tagOf( +1 / 0 ) ).toBe( 'number' )
        expect( tagOf( -1 / 0 ) ).toBe( 'number' )
        expect( tagOf( new Number( 0 ) ) ).toBe( 'number' )
        expect( tagOf( new Number( 0 / 0 ) ) ).toBe( 'number' )
        expect( tagOf( new Number( +1 / 0 ) ) ).toBe( 'number' )
        expect( tagOf( new Number( -1 / 0 ) ) ).toBe( 'number' )
    } )

    it( 'string' , function () {
        expect( tagOf( '' ) ).toBe( 'string' )
        expect( tagOf( new String( '' ) ) ).toBe( 'string' )
    } )

    it( 'boolean' , function () {
        expect( tagOf( true ) ).toBe( 'boolean' )
        expect( tagOf( false ) ).toBe( 'boolean' )
        expect( tagOf( new Boolean( true ) ) ).toBe( 'boolean' )
        expect( tagOf( new Boolean( false ) ) ).toBe( 'boolean' )
    } )

    it( 'object' , function () {
        expect( tagOf( {} ) ).toBe( 'object' )
        expect( tagOf( new Object() ) ).toBe( 'object' )
    } )

    it( 'array' , function () {
        expect( tagOf( [] ) ).toBe( 'array' )
        expect( tagOf( new Array() ) ).toBe( 'array' )
    } )

    it( 'function' , function () {
        expect( tagOf( function () {} ) ).toBe( 'function' )
        expect( tagOf( new Function() ) ).toBe( 'function' )
    } )

    it( 'date' , function () {
        expect( tagOf( new Date() ) ).toBe( 'date' )
    } )

    it( 'regexp' , function () {
        expect( tagOf( /^/i ) ).toBe( 'regexp' )
        expect( tagOf( new RegExp() ) ).toBe( 'regexp' )
    } )

    it( 'custom' , function () {

        var Foo = function Foo() {}
        var Bar = function () {}
        function Baz() {}

        expect( tagOf( new Foo() ) ).toBe( 'foo' )
        expect( tagOf( new Bar() ) ).toBe( 'object' )
        expect( tagOf( new Baz() ) ).toBe( 'baz' )
        expect( tagOf( new ( function () {} ) ) ).toBe( 'object' ) // eslint-disable-line no-extra-parens

    } )

} )
