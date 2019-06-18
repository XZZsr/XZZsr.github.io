
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"RankScene":"resource/scene/RankScene.exml","HomeScene":"resource/scene/HomeScene.exml","ModalComponent":"resource/component/ModalComponent.exml","GameScene":"resource/scene/GameScene.exml","CreateData":"resource/scene/CreateMap.exml"};generateEUI.paths['resource/component/ModalComponent.exml'] = window.ModalComponentSkin = (function (_super) {
	__extends(ModalComponentSkin, _super);
	function ModalComponentSkin() {
		_super.call(this);
		this.skinParts = ["titleLabel","contentPanel","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.closeBtn_i()];
	}
	var _proto = ModalComponentSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 880;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this._Rect2_i(),this.titleLabel_i(),this.contentPanel_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 42;
		t.stroke = 4;
		t.strokeColor = 0x999999;
		t.text = "";
		t.textColor = 0xf4db4a;
		t.y = 50;
		return t;
	};
	_proto.contentPanel_i = function () {
		var t = new eui.Group();
		this.contentPanel = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 580;
		t.y = 130;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.source = "close_png";
		t.x = 665;
		t.y = 197;
		return t;
	};
	return ModalComponentSkin;
})(eui.Skin);generateEUI.paths['resource/scene/CreateMap.exml'] = window.CreateDataSkin = (function (_super) {
	__extends(CreateDataSkin, _super);
	function CreateDataSkin() {
		_super.call(this);
		this.skinParts = ["blockPanel","checkPanel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.blockPanel_i(),this.checkPanel_i()];
	}
	var _proto = CreateDataSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xcecece;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.blockPanel_i = function () {
		var t = new eui.Group();
		this.blockPanel = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 720;
		t.y = 180;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xb9b9b9;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.checkPanel_i = function () {
		var t = new eui.Group();
		this.checkPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 720;
		t.x = 19;
		t.y = 1000;
		return t;
	};
	return CreateDataSkin;
})(eui.Skin);generateEUI.paths['resource/scene/GameScene.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["blockPanel","checkPanel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.blockPanel_i(),this.checkPanel_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xcecece;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.blockPanel_i = function () {
		var t = new eui.Group();
		this.blockPanel = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 720;
		t.y = 180;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xb9b9b9;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.checkPanel_i = function () {
		var t = new eui.Group();
		this.checkPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 720;
		t.x = 19;
		t.y = 1000;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/scene/HomeScene.exml'] = window.HomeSceneSkin = (function (_super) {
	__extends(HomeSceneSkin, _super);
	function HomeSceneSkin() {
		_super.call(this);
		this.skinParts = ["villageBtn","roleBtn","startBtn","conditionLabel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.villageBtn_i(),this.roleBtn_i(),this.startBtn_i(),this.conditionLabel_i()];
	}
	var _proto = HomeSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto.villageBtn_i = function () {
		var t = new eui.Image();
		this.villageBtn = t;
		t.horizontalCenter = 0;
		t.source = "village_png";
		t.y = 200;
		return t;
	};
	_proto.roleBtn_i = function () {
		var t = new eui.Image();
		this.roleBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 359.67;
		t.horizontalCenter = 0;
		t.source = "role1_png";
		t.width = 175.13;
		t.y = 640;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Image();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.source = "startBtn_png";
		t.y = 1050;
		return t;
	};
	_proto.conditionLabel_i = function () {
		var t = new eui.Label();
		this.conditionLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "还差5关，晋级小秀才";
		t.textColor = 0x333333;
		t.y = 1200;
		return t;
	};
	return HomeSceneSkin;
})(eui.Skin);generateEUI.paths['resource/scene/RankScene.exml'] = window.RankSceneSkin = (function (_super) {
	__extends(RankSceneSkin, _super);
	function RankSceneSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
	}
	var _proto = RankSceneSkin.prototype;

	return RankSceneSkin;
})(eui.Skin);