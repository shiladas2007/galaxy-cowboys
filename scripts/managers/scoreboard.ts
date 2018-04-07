module managers {
    export class ScoreBoard {
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
        this._initialize();
      }
  
      private _initialize():void {
        this.LivesLabel = new ui.Label("Lives: 0", "20px", "Dock51", "#FFFF00", 10, 10, false);
        this.ScoreLabel = new ui.Label("Score: 99999", "20px", "Dock51", "#FFFF00", 500, 10, false);
  
        this.Lives = 1;
        this.Score = 0;
      }
  
    }
  }
  