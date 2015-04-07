var BLOCK_SIZE = 8;
var MARGIN = 2 * BLOCK_SIZE;
var GRID_WIDTH = 36 * BLOCK_SIZE; // 2 margin + 1 grid width = 40 block

var SnakeGameLayer = cc.Layer.extend({
	draw: null,
	
	ctor:function () {
		
		this._super();
		var winSize = cc.director.getWinSize();
		
		backgroundLayer = cc.LayerColor.create(new cc.Color(255,255,255,255),
				winSize.width, winSize.height);
		this.addChild(backgroundLayer);
		
		draw = new cc.DrawNode();
		backgroundLayer.addChild(draw);
		
		//console.log(winSize.height);
		draw.drawSegment(cc.p(MARGIN, MARGIN), cc.p(MARGIN, winSize.height - MARGIN), 1, cc.color(0, 0, 0, 255));
		draw.drawSegment(cc.p(MARGIN, MARGIN), cc.p(MARGIN + GRID_WIDTH, MARGIN), 1, cc.color(0, 0, 0, 255));
		draw.drawSegment(cc.p(MARGIN, winSize.height - MARGIN), cc.p(MARGIN + GRID_WIDTH, winSize.height - MARGIN), 1, cc.color(0, 0, 0, 255));
		draw.drawSegment(cc.p(MARGIN + GRID_WIDTH, winSize.height - MARGIN), cc.p(MARGIN + GRID_WIDTH, MARGIN), 1, cc.color(0, 0, 0, 255));

		var titleLabel = new cc.LabelTTF("多人贪食蛇", "Arial", 15);
		titleLabel.setAnchorPoint(0.5, 1);
		titleLabel.color = cc.color(0, 0, 0);
		titleLabel.x = winSize.width - 10 * BLOCK_SIZE;
		titleLabel.y = winSize.height - MARGIN;
		backgroundLayer.addChild(titleLabel, 10);
		
		return true;
	}
});



var SnakeGameScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new SnakeGameLayer();
		this.addChild(layer);
	}
});