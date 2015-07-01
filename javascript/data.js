// Data functions
function returnGif(name) {
    return name.replace(/\s/g, '') + ".gif";
}


var structures = [
        {
            type: "Default",
            name: "HQ",
            hitpoints: [6930, 7200, 8085, 9408, 11592, 0, 15120, 16443],
            costCash: [0, 1000, 4500, 9900, 0, 0, 0, 91000],
            costIron: [0, 0, 0, 0, 0, 0, 0, 23000],
            buildTime: [0, 180, 3600, 7200, 0, 0, 0, 28800],
            instantGold: [0, 7, 37, 65, 0, 0, 0, 353],
            storageCapacityOil: 2000,
            storageCapacityCash: 2000,
            storageCapacityIron: [0, 0, 0, 0, 2000, 2000, 2000, 2000],
            desc: "The HQ is the central command structure for the entire base. Its level dictates what units and structures can be built at the base.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Default",
            name: "Weapons Command",
            hitpoints: [1200, 1300, 0],
            costCash: [0, 1200, 0],
            buildTime: [0, 300, 0],
            upgradeExp: [0, 20, 0],
            instantGold: [0, 8],
            levelUpgradeLimit: [1, 1, 1, 2],
            commandPoints: [14, 16, 0],
            desc: "Add Command Points per upgrade level. Unlock new Command Powers by upgrading your HQ.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Operations",
            name: "Engineer",
            buildTime: [0],
            instantGold: [750],
            levelBuildLimit: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            info: "Multiple engineers allow you to build or upgrade multiple structures at once",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Operations",
            name: "Troop Tarmac",
            costCash: [300, 4800, 17000, 50000],
            buildTime: [3, 1800, 6300, 12600],
            upgradeExp: [0, 15, 25, 35, 45],
            instantGold: [0, 28, 77, 198],
            levelBuildLimit: [2, 3, 3, 4, 4, 5, 5],
            levelUpgradeLimit: [1, 1, 2, 2, 3, 0, 4],
            troopCapacity: [9, 10, 11, 12, 13],
            info: "Displays trained units ready for battle",
            desc: "Troop Tarmacs are the staging positions for units ready for battle. Upgrading the tarmacs increases the number of troops that the tarmac can support.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Operations",
            name: "Storage Bunker",
            hitpoints: [1100, 1200, 0],
            costCash: [0, 1600, 0],
            buildTime: [0, 1800, 0],
            upgradeExp: [0, 20, 0],
            instantGold: [0, 18],
            levelUpgradeLimit: [0, 0, 0],
            storageCapacityOil: [1000, 2000],
            storageCapacityCash: [1000, 2000],
            storageReserve: [0.5, 0.52],
            info: "Protects resources from enemy attacks",
            desc: "The Storage Bunker is a hardened, secure stockpile. Resources stored in the reserve cannot be captured by enemies. As its level increases, the amount of resources it can protect are increased.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Operations",
            name: "Alliance Building",
            hitpoints: [0, 0, 0],
            costCash: [0, 0, 0],
            buildTime: [0, 0, 0],
            upgradeExp: [0, 0, 0],
            instantGold: [0, 0],
            levelBuildLimit: [0, 0, 1],
            info: "Use to ally with friends from around the world",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Operations",
            name: "Research Agency",
            hitpoints: [0, 0, 0],
            costCash: [1200, 0, 0],
            buildTime: [3600, 0, 0],
            upgradeExp: [0, 0, 0],
            levelBuildLimit: [0, 0, 0, 1],
            info: "Upgrades units and weapons",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
    	{
    	    type: "Defenses",
    	    name: "Wall",
    	    hitpoints: [180, 200, 0],
    	    costCash: [100, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [20, 30, 40, 50],
    	    levelUpgradeLimit: [1, 1, 2],
    	    info: "Protects against attacking troops",
    	    desc: "Walls are used to enclose and protect vital base structures and control movement of enemy forces. The amount of damage they can sustain before breaking increases as they are upgraded.",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Guard Tower",
    	    hitpoints: [1837, 0, 0, 0],
    	    costCash: [150, 700, 2500, 5400],
    	    buildTime: [3, 300, 900, 2700],
    	    upgradeExp: [0, 10, 15, 20],
    	    instantGold: [0, 6, 16, 35],
    	    levelBuildLimit: [1, 2, 2, 2, 3],
    	    damagePerSec: [36, 44, 56, 68],
    	    info: "Fires a machine gun at attacking ground forces",
    	    desc: "The Guard Tower provides basic, medium range defense against enemy forces.",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Domed Defense",
    	    hitpoints: [0, 0, 0],
    	    costCash: [900, 0, 0],
    	    buildTime: [1800, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    instantGold: [0, 0],
    	    levelBuildLimit: [0, 0, 1, 2],
    	    info: "Multiple weapon systems within an armored dome",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Rally Flag",
    	    hitpoints: [0, 0, 0],
    	    costCash: [800, 0, 0],
    	    buildTime: [3, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    instantGold: [0, 0],
    	    levelBuildLimit: [0, 0, 2, 2],
    	    info: "Set guards or patrols on base for improved defenses",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Landmine",
    	    hitpoints: [0, 0, 0],
    	    costCash: [100, 0, 0],
    	    buildTime: [0, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [0, 0, 0, 4],
    	    damagePerSec: 58,
    	    info: "Explodes to damage any ground unit within small area",
    	    desc: "The proximity fused Landmine is a cheap, effective counter to light enemy units. They damage any enemy nearby.",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Artillery",
    	    hitpoints: [0, 0, 0],
    	    costCash: [0, 0, 0],
    	    buildTime: [0, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [0, 0, 0, 0],
    	    info: "Fires long range, high power shells",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Patriot",
    	    hitpoints: [0, 0, 0],
    	    costCash: [0, 0, 0],
    	    buildTime: [0, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [0, 0, 0, 0, 0, 0],
    	    info: "Fires surface-to-air missiles at enemy aircraft",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Shock Mine",
    	    hitpoints: [0, 0, 0],
    	    costCash: [0, 0, 0],
    	    buildTime: [0, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0],
    	    info: "Activates to stun enemy vehicles within small area",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Metal Rain",
    	    hitpoints: [0, 0, 0],
    	    costCash: [0, 0, 0],
    	    buildTime: [0, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	    info: "Fires a barrage of 40mm grenades",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Railgun",
    	    hitpoints: [0, 0, 0],
    	    costCash: [0, 0, 0],
    	    buildTime: [0, 0, 0],
    	    upgradeExp: [0, 0, 0],
    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	    info: "Accelerates projectiles with unparalleled force",
    	    imageFile: function () {
    	        return returnGif(this.name);
    	    }
    	},
        {
            type: "Resources",
            name: "Oil Derrick",
            hitpoints: [1000, 1200, 1400, 1700, 2000],
            costCash: [0, 600, 1350, 0, 4500],
            buildTime: [0, 60, 3600, 0, 7200],
            upgradeExp: [0, 5, 10, 0, 20],
            instantGold: [0, 4, 27, 0, 47],
            levelBuildLimit: [1, 1, 1, 1, 2],
            productionOilMax: [600, 900, 1600, 2000, 3600],
            productionOilHourly: [201, 302, 403, 497, 597],
            info: "Converts fossil fuels into useable energy",
            desc: "The Oil Derrick produces the fuel needed to build and upgrade units and command powers. Fuel stored in the Oil Derrick must be stored in the Fuel Stockpile before it is availble for use.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Fuel Stockpile",
            hitpoints: [2600, 2700, 3030, 3530, 0, 4550, 5800],
            costCash: [1100, 2200, 0, 8200, 0, 0, 46000],
            buildTime: [3, 1800, 0, 5400, 0, 0, 13500],
            upgradeExp: [0, 10, 15, 20, 0, 0, 35],
            instantGold: [0, 20, 0, 55, 0, 0, 190],
            levelBuildLimit: [1, 1, 1, 1, 1, 1, 1, 2],
            levelUpgradeLimit: [1, 2, 3, 4],
            storageCapacityOil: [1000, 3000, 5000, 10000, 0, 69000, 120000],
            info: "Contains and protects fuel",
            desc: "The Fuel Stockpile is the storage container for all ready base fuel. Upgrades to this stockpile increase its storage capacity.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Supply Drop",
            hitpoints: [1000, 1200, 1400, 1700, 2000, 0, 2750, 3500],
            costCash: [200, 500, 1250, 0, 4100, 0, 0, 23000],
            buildTime: [60, 60, 2700, 0, 6300, 0, 0, 13500],
            upgradeExp: [0, 5, 10, 0, 20, 0, 0, 35],
            instantGold: [0, 4, 21, 0, 43, 0, 0, 128],
            levelBuildLimit: [1, 2, 2, 2, 3],
            productionCashMax: [600, 900, 1600, 2000, 0, 0, 6400, 7200],
            productionCashHourly: [201, 302, 403, 497, 0, 0, 799, 900],
            info: "Collects supply drops from global reinforcements",
            desc: "The Supply Drop is where supplies are delivered by central command. Supplies dropped here must be stored at the stockpile before they are available to be spent.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Supply Stockpile",
            hitpoints: [2600, 2700, 3030, 3530],
            costCash: [1100, 2300, 0, 8400],
            buildTime: [3, 1800, 0, 5400],
            upgradeExp: [0, 10, 15, 20],
            instantGold: [0, 20, 0, 55],
            levelBuildLimit: [1, 1, 1, 1, 1, 1, 2],
            levelUpgradeLimit: [1, 2, 3, 4],
            storageCapacityCash: [1000, 5000, 10000, 18000],
            info: "Contains and protects suppliers",
            desc: "The Supply Stockpile is where all supplies ready for production are stored. As the stockpile's level is increased, its total storage capacity is increased.",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Steel Stockpile",
            hitpoints: [0, 0, 0],
            costCash: [0, 0, 0],
            buildTime: [0, 0, 0],
            upgradeExp: [0, 0, 0],
            instantGold: [0, 0],
            levelBuildLimit: [0, 0, 0, 0, 1],
            info: "Contains and protects steel",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Steel Factory",
            hitpoints: [0, 0, 0],
            costCash: [0, 0, 0],
            buildTime: [0, 0, 0],
            upgradeExp: [0, 0, 0],
            levelBuildLimit: [0, 0, 0, 0, 0, 1],
            info: "Converts smelted iron from the earth into steel",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Tech Stockpile",
            hitpoints: [0, 0, 0],
            costCash: [0, 0, 0],
            buildTime: [0, 0, 0],
            upgradeExp: [0, 0, 0],
            levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 1],
            info: "Contains and protects tech",
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            type: "Resources",
            name: "Tech Factory",
            hitpoints: [0, 0, 0],
            costCash: [0, 0, 0],
            buildTime: [0, 0, 0],
            upgradeExp: [0, 0, 0],
            levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            info: "Researches technology used for high-tech warfare",
            imageFile: function () {
                return returnGif(this.name);
            }
        }
];
var units = [
        {
            name: "Rangers",
            info: "Rangers are an all-purpose fighting force made up of Riflemen, Rockets and Medics. Weak vs enemy infantry; Strong vs Spider Drones",
            population: 1,
            damageType: "Area",
            targets: "Ground, Air, Structures, Units",
            healPerSec: [0],
            damagePerSec: [30, 0, 37],
            hitpoints: [140, 0, 0],
            trainingCost: [25, 0, 100],
            trainingTime: 7,
            requiredLevel: 1,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Striker VI",
            info: "The Striker VI is a fast, armored vehicle that gets in close to give cover for other units. Weak vs Tanks and Spider Drones; Strong vs Enemy Infantry and Aircraft",
            population: 3,
            damageType: "Single Target",
            targets: "Structures, Units",
            damagePerSec: [40, 0, 55],
            hitpoints: [800, 0, 1200],
            trainingCost: [100, 0, 300],
            trainingTime: 20,
            requiredLevel: 2,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Tank",
            info: "The Tank is a heavily armored, hard hitting combatant. Weak vs Aircraft and Spider Drones; Strong vs enemy vehicles and defense structures",
            population: 6,
            damageType: "Single Target",
            targets: "Ground, Structures",
            damagePerSec: [125, 0, 0],
            hitpoints: [3000, 0, 0],
            trainingCost: [600, 0, 0],
            trainingTime: 60,
            requiredLevel: 4,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Attack Drones",
            info: "Attack Drones are light, fast swarms that hunt and kill enemy defense structures. Weak vs Anti-air defenses and enemy infantry; Strong vs ground targets",
            population: 2,
            damageType: "Single Target",
            targets: "Structures, Units",
            damagePerSec: [51, 0, 0],
            hitpoints: [154, 0, 0],
            trainingCost: [375, 0, 0],
            trainingTime: 15,
            requiredLevel: 6,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Tomahawk",
            info: "The Unmanned Ground Vehicle (UGV) provides long range, area clearing fire support. Weak vs Aircraft and nearby enemies, Strong at long range",
            population: 3,
            damageType: "Area",
            targets: "Ground, Structures",
            damagePerSec: [85, 0, 0],
            hitpoints: [250, 0, 0],
            trainingCost: [400, 0, 0],
            trainingTime: 360,
            requiredLevel: 8,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Stealth Tank",
            info: "Invisible hunters firing an EMP burst, Stealth Tanks can shut down enemy defenses. Weak vs enemy infantry; Strong vs enemy vehicles and Defense structures",
            population: 6,
            damageType: "Single Target",
            targets: "Air, Structures, Units",
            damagePerSec: [30, 0, 0],
            hitpoints: [1400, 0, 0],
            trainingCost: [500, 0, 0],
            trainingTime: 720,
            requiredLevel: 10,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Apache",
            info: "Apaches provides overwhelming airborne firepower that can win any battle. Weak vs Patriots and Domed Aerial Defenses; Strong vs ground targets",
            population: 7,
            damageType: "Single Target",
            targets: "Vehicles, Structures, Units",
            damagePerSec: [140, 0, 0],
            hitpoints: [4950, 0, 0],
            trainingCost: [600, 0, 0],
            trainingTime: 600,
            requiredLevel: 12,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "CnC Vehicle",
            info: "The CnC Vehicle force multiplier. It hacks enemy defenses and boosts nearby allied units. Weak vs enemy vehicles; Strong vs enemy Defense structures",
            population: 15,
            damageType: "Area",
            targets: "Structures, Units",
            damagePerSec: [0],
            hitpoints: [2400, 0, 0],
            trainingCost: [700, 0, 0],
            trainingTime: 1500,
            requiredLevel: 14,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Medivac",
            info: "The Medivac prvides battlefield repairs and healing. Motto: 'That others may live.' Weak vs enemy units, Strong healing support to allies",
            population: 6,
            damageType: "Area",
            targets: "Structures, Units",
            healPerSec: [164, 0, 0],
            damagePerSec: [0],
            hitpoints: [290, 0, 0],
            trainingCost: [800, 0, 0],
            trainingTime: 420,
            requiredLevel: 16,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "LGL Troops",
            info: "LGL Troopers use laser-guided lightning to quickly melt away enemies. Weak vs Aircraft; Strong vs enemy Defense Structures",
            population: 3,
            damageType: "Single Target",
            targets: "Ground, Structures",
            damagePerSec: [220, 0, 0],
            hitpoints: [3000, 0, 0],
            trainingCost: [6000, 0, 0],
            trainingTime: 240,
            requiredLevel: 18,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
        {
            name: "Titan Tank",
            info: "Titan Tanks are the kings of the battlefield. Twin cannons, rocket pods and wall crushers. Weak vs Railguns and Domed THEL; Strong vs everything!!",
            population: 18,
            damageType: "Single Target",
            targets: "Ground, Air, Structures",
            damagePerSec: [900, 0, 0],
            hitpoints: [25000, 0, 0],
            trainingCost: [19000, 0, 0],
            trainingTime: 1800,
            requiredLevel: 20,
            imageFile: function () {
                return returnGif(this.name);
            }
        },
];