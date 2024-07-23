describe('test my greet function' , function(){
    it("it should return 'Hello, Bob' when called with 'Bob' " , function(){
       assert.equal(greet('Bob'),'Hello, Bob'), "this should not be true"});

       it("it should return 'Hello, Sam' when called with 'Sam' " , function(){
        assert.equal(greet('Sam'),'Hello, Sam'), "this should not be true"});
       
    });
