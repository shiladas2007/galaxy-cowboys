module ui {
    export class Background extends createjs.Bitmap {
      // private instance variables
  
      // public properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager.getResult("background"));
        this.Start();
      }
  
      // private methods
  
      // reset the objects location to some value
      
  
      // public methods
  
      // Initializes variables and creates new objects
      public Start():void {
      
      }
  
      // updates the game object every frame
      public Update():void {
     
      }
    }
  }
  