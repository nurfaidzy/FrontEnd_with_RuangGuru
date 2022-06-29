const Player = require("../11-oop-steal-gold-cp/index");
	

class Thief extends Player 
{
  constructor(name) 
  {
	  super(name);
	  this.job = "Thief";
	}
	
  robbedBlind() {
    // TODO: answer here      
    if (this.getGold() < 10) 
    {      
      return "Aku terlalu miskin";	        
    } 
    else 
    { 
      this.setGold(this.getGold() - 10);
	    return this.setStealChance(0.75);
	  }
	}

  steal(player) 
  {
	  // TODO: answer here
	  if (player.getGold() < 5) 
    {
      return "Lawan terlalu miskin";
    }
    else if (player.randomizer() <= this.getStealChance()) 
    {
      this.setGold(this.getGold() + 5);
      player.setGold(player.getGold() - 5);
      if (player.job === "Trickster") 
      {
        return player.distractionPurse(this);
      } else 
      {
        return "Berhasil mencuri 5 gold";
      }   
    }
    else
    {
      return "Gagal mencuri, coba lain kali"; 
    }
  }
}

class Trickster extends Player 
{
  constructor(name) 
  {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }
  setDistractionPurseChance(chance) 
  {
    // TODO: answer here
    this.distractionPurseChance = chance;
  }
  getDistractionPurseChance() 
  {
    // TODO: answer here
    return this.distractionPurseChance;
  }
  distractionPurse(player) 
  {
    const rng = this.randomizer();
    // TODO: answer here
    if (this.getDistractionPurseChance() >= rng) 
    {
      return this.steal(player);
    } else 
    {
      return "Gagal mencuri balik";
    }
  }

	steal(player) 
  {    
    // TODO: answer here
    if (player.getGold() > 10) 
    {
      this.setGold(this.getGold() + 10);
      player.setGold(player.getGold() - 10);
      return "Berhasil mencuri balik 10 gold";
    } 
    else 
    {
      this.setGold(this.getGold() + player.getGold());
      player.setGold(0);
      return "Berhasil mencuri balik semua uang lawan";
    }
  }
}
	
// Dilarang menghapus code dibawah ini!!!
module.exports = 
{
  Thief,
  Trickster,	
};