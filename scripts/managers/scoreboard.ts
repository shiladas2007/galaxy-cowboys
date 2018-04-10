module managers {
    export class ScoreBoard extends createjs.Container {
      // private instance variables
      private _lives:number = 1;
      private _score:number = 0;
  
      // public Instance variables
      public LivesLabel: ui.Label;
      public ScoreLabel: ui.Label;
  
      // public properties
      get Lives():number {
          return this._lives;
      }
  
      set Lives(newLives:number) {
          this._lives = newLives;
          this.LivesLabel.text = "Lives: " + this._lives;
      }
  
      get Score():number {
          return this._score;
      }
  
      set Score(newScore:number) {
          this._score = newScore;
          this.ScoreLabel.text = "Score: " + this._score;
      }
  
      // constructors
      constructor() {
          super();
          this._initialize();
      }

      public main() {
          this.addChild(this.LivesLabel);
          this.addChild(this.ScoreLabel);
      }
  
      private _initialize():void {
          this.LivesLabel = new ui.Label("Lives: 0", "14pt", "Sporting Grotesque", "#FFFF00", 20, 10, false);
          this.ScoreLabel = new ui.Label("Score: 0", "14pt", "Sporting Grotesque", "#FFFF00", 500, 10, false);
    
          this.Lives = 1;
          this.Score = 0;

          this.main();
      }
  
    }
  }
  