var bg, size;
var scrollSpeed = 1;

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        size = cc.winSize;
        //console.log("w:"+size.width+" h:"+size.height);
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        /*this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });*/

        //add a bg
      //  var bg = new cc.Sprite(res.bg);
        //bg.x = size.width/2;
        //bg.y = size.height/2;
        //bg.setPosition(, );
        bg = new ScrollingBG();
        this.addChild(bg);
        this.scheduleUpdate();

        //add a new image
        this.sprite = new cc.Sprite(res.jet_1);
        this.sprite.attr({
          x: size.width /2,
          y: size.height /2
        })
        this.addChild(this.sprite, 1);

        return true;
    },
    update: function(dt){
      bg.scroll();
    }
});

var ScrollingBG = cc.Sprite.extend({
  ctor: function(){
    this._super();
    //console.log("this:",this);
    this.initWithFile("res/BG.png")
  },
  onEnter: function(){
    //this.setPosition(size.width/2, size.height/2);
    this.setPosition(size.width/2, size.height/2);
  },
  scroll: function(){
    this.setPosition(this.getPosition().x - scrollSpeed,
    this.getPosition().y);
    if(this.getPosition().x<0){
      //console.log("x:"+this.getPosition().x)
      //moving background
      this.setPosition(this.getPosition().x+1300, this.getPosition().y);
    }
  }
})

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
