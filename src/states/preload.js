export default class Preload {

	constructor(){
		this.preloadAsset = null;
		this.ready = false;
	}

	preload(){
		this.load.image('loading_bg','assets/images/loading_bg.jpg');
	}

	create(){
		this.add.sprite(0,0, "loading_bg");
		this.preloadAsset = this.add.sprite(this.game.width/2, this.game.height/2, 'preloader');
		this.preloadAsset.anchor.setTo(0.5,0.5);
		this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
		this.load.setPreloadSprite(this.preloadAsset);
		//load here

		this.load.image('cloud','assets/images/cloud.png');
		this.load.image('game_bg','assets/images/game_bg.jpg');

		this.load.start();
	}

	update(){
		if(this.ready){
			this.game.state.start('game');
		}
	}


	onLoadComplete(){
		this.ready = true;
	}

}