// Data functions
function returnGif(name) {
    return name.replace(/\s/g, '') + ".gif";
}


var structures = [
        {
            type: "Default",
            name: "HQ",
            hitpoints: [6930, 7200, 8085, 9408, 11592, 12432, 15120, 16443, 19740, 21000],
            costCash: [0, 1000, 4500, 9900, 18000, 32000, 55000, 91000, 146000, 228000],
            costIron: [0, 0, 0, 0, 0, 5400, 11000, 23000, 44000, 81000],
            costTech: [0, 0, 0, 0, 0, 0, 0, 0, 0, 9600],
            buildTime: [0, 180, 3600, 7200, 10800, 16200, 21600, 28800, 36000, 43200],
            instantGold: [0, 7, 37, 65, 92, 156, 272, 399, 545, 783],
            storageCapacityOil: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
            storageCapacityCash: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000],
            storageCapacityIron: [0, 0, 0, 0, 2000, 2000, 2000, 2000, 2000, 2000],
            storageCapacityTech: [0, 0, 0, 0, 0, 0, 0, 0, 2000, 2000],
            desc: "The HQ is the central command structure for the entire base. Its level dictates what units and structures can be built at the base.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Default",
            name: "Weapons Command",
            hitpoints: [1200, 1300, 1400, 1500, 1600, 1700, 2300, 2545, 3145],
            costCash: [0, 1200, 4600, 8600, 16000, 28000, 48000, 79000, 128000],
            costIron: [0, 0, 0, 0, 0, 4700, 10000, 20000, 39000],
            buildTime: [0, 300, 1800, 5400, 9000, 12600, 18000, 25200, 32400],
            upgradeExp: [0, 20, 20, 25, 25, 30, 35, 40, 45],
            instantGold: [0, 8, 28, 68, 101, 159, 240, 353, 498],
            levelUpgradeLimit: [1, 1, 1, 2, , 6, 7, 8],
            commandPoints: [3, 4, 5, 6, 7, 8, 9, 10, 11],
            desc: "Add Command Points per upgrade level. Unlock new Command Powers by upgrading your HQ.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
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
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Operations",
            name: "Troop Tarmac",
            costCash: [300, 4800, 17000, 50000],
            buildTime: [3, 1800, 6300, 12600],
            upgradeExp: [0, 15, 25, 35, 45],
            instantGold: [0, 28, 77, 198],
            levelBuildLimit: [2, 3, 3, 4, 4, 5, 5, 6],
            levelUpgradeLimit: [1, 1, 2, 2, 3, 3, 4, 4, 5],
            troopCapacity: [9, 10, 11, 12, 13],
            info: "Displays trained units ready for battle",
            desc: "Troop Tarmacs are the staging positions for units ready for battle. Upgrading the tarmacs increases the number of troops that the tarmac can support.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Operations",
            name: "Storage Bunker",
            hitpoints: [1100, 1200, 1350, 1580, 1830, 2025, 2665, 3205, 3745, 4260],
            costCash: [0, 1600, 3000, 5800, 11000, 19000, 32000, 53000, 85000, 133000],
            costIron: [0, 0, 0, 0, 0, 3200, 6600, 13000, 26000, 48000],
            costTech: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5600],
            buildTime: [0, 1800, 3600, 5400, 8100, 10800, 14400, 18000, 21600, 25200],
            upgradeExp: [0, 20, 25, 30, 35, 40, 40, 45, 50, 55],
            instantGold: [0, 18, 42, 59, 87, 128, 180, 256, 362, 511],
            levelUpgradeLimit: [, , , , , , 7],
            storageCapacityOil: [1000, 2000, 3000, 4500, 6500, 11000, 13000, 33000, 51000, 76000],
            storageCapacityCash: [1000, 2000, 3000, 4500, 6500, 8500, 10000, 15000, 23000, 34000],
            storageCapacityIron: [0, 0, 0, 0, 1100, 1700, 2500, 4400, 8100, 14000],
            storageCapacityTech: [0, 0, 0, 0, 0, 0, 0, 0, 1000, 2300],
            storageReserve: ['50%', '52%', '54%', '56%', '58%', '60%', '62%', '64%', '66%', '68%'],
            info: "Protects resources from enemy attacks",
            desc: "The Storage Bunker is a hardened, secure stockpile. Resources stored in the reserve cannot be captured by enemies. As its level increases, the amount of resources it can protect are increased.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Operations",
            name: "Alliance Building",
            hitpoints: [1000],
            costCash: [4800],
            buildTime: [3],
            levelBuildLimit: [0, 0, 1],
            info: "Use to ally with friends from around the world",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Operations",
            name: "Research Agency",
            hitpoints: [1200, 1400, 1600, 1800, 2400, 2585, 2700, 3380, 3875],
            costCash: [1200, 2400, , 8700, 16000, 28000, 48000, 80000, 129000],
            costIron: [0, 0, 0, 0, 0, 4800, 10000, 20000, 39000],
            buildTime: [3600, 6300, , 14400, 18000, 23400, 28800, 36000, 43200],
            upgradeExp: [0, 10, 14, 15, 17, 20, 21, 24, 24],
            instantGold: [0, 37, , 82, 140, 206, 287, 402, 546],
            levelBuildLimit: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
            levelUpgradeLimit: [0, 0, 1, 2, 3, 4, 5, 6, 8, 9],
            info: "Upgrades units and weapons",
            desc: "The Research Agency is where all units and command powers can be upgraded. Keep your forces razor sharp by continuing their training here.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
    	{
    	    type: "Defenses",
    	    name: "Wall",
    	    hitpoints: [180, 200, 240, 384, 560],
    	    costCash: [100, 400, 1500, 4600, 12200],
            costIron: [0, 0, , 900, 3700],
    	    instantGold: [0, 2, 7, 23],
    	    levelBuildLimit: [20, 30, 40, 50, 60, 70, 80, 90],
    	    levelUpgradeLimit: [1, 1, 2, 2, 3, 3, 4, 4, 5],
    	    buildTime: 0,
    	    info: "Protects against attacking troops",
    	    desc: "Walls are used to enclose and protect vital base structures and control movement of enemy forces. The amount of damage they can sustain before breaking increases as they are upgraded.",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Guard Tower",
    	    hitpoints: [1837, 2107, 2376, 2648, 2917, 3349, 4200, 4741, 5341, 6000],
    	    costCash: [150, 700, 2500, 5400, 9900, 18000, 30000, 50000, 81000, 125000],
    	    costIron: [0, 0, 0, 0, 0, 3000, 6300, 13000, 24000, 45000],
            costTech: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5300],
    	    buildTime: [3, 300, 900, 2700, 4500, 6300, 9000, 11700, 14400, 18000],
    	    upgradeExp: [0, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    	    instantGold: [0, 6, 18, 42, 68, 105, 152, 223, 318, 464],
    	    levelBuildLimit: [1, 2, 2, 2, 3, 3, 4, 4, 4, 5],
            levelUpgradeLimit: [, , , , , 6, 7],
    	    damagePerSec: [36, 48, 64, 80, 96, 110, 144, 158, 174, 200],
    	    info: "Fires a machine gun at attacking ground forces",
    	    desc: "The Guard Tower provides basic, medium range defense against enemy forces.",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Domed Defense",
    	    hitpoints: [3061, 3512, 3960, 4411, 4861, 5640, 6421, 7200, 8011],
    	    damagePerSec: [70, 86, 104, 126, 148, 168, 202, 244, 280],
    	    costCash: [900, 1800, , 6600, 12000, 21000, 36000, 61000, 98000],
            costIron: [0, 0, 0, 0, 0, 3600, 7600, 15000, 30000],
    	    buildTime: [1800, 3600, , 7200, 9900, 12600, 15300, 18000, 21600],
    	    upgradeExp: [0, 15, 20, 25, 30, 35, 40, 45, 50],
    	    instantGold: [0, 28, , 54, 78, 141, 196, 276, 396],
    	    levelBuildLimit: [0, 0, 1, 2, , , 3, 4],
    	    levelUpgradeLimit: [0, 0, , 3, 4, 5, 6, 7, 8],
    	    info: "Multiple weapon systems within an armored dome",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Rally Flag",
    	    costCash: [800, 1700, 11000, 34000, 92000],
            costIron: [0, 0, 0, 7100, 28000],
    	    buildTime: [3, 3600, 9900, 15300, 21600],
    	    upgradeExp: [0, 20, 25, 35, 45],
    	    instantGold: [0, 28, 95, 190, 380],
    	    levelBuildLimit: [0, 0, 2, 2, 3, 3, 4, 4, 4, 5],
            levelUpgradeLimit: [, , , , , , , 4, 5],
    	    troopCapacity: [9, 10, 11, 12, 13],
    	    info: "Set guards or patrols on base for improved defenses",
            desc: "Rally Flags are the guard positions and patrol points for base defense units. Defense units are purchased and they can be upgraded to support more defense troops.",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Landmine",
    	    costCash: [100],
    	    buildTime: 0,
    	    upgradeExp: [0, 20, 25, 30, 35],
    	    instantGold: [0, 40],
    	    levelBuildLimit: [0, 0, 0, 4, 4, 4, 4, 8],
    	    damagePerSec: [58, 73, , 114, 137],
    	    info: "Explodes to damage any ground unit within small area",
    	    desc: "The proximity fused Landmine is a cheap, effective counter to light enemy units. They damage any enemy nearby.",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Artillery",
    	    hitpoints: [2552, 2928, 3301, 3680, 4051, 4651, 5251, 5928, 6672],
            damagePerSec: [183, 198, 212, 225, 240, 254, 268, 282, 318],
            costCash: [1100, 2200, 4400, 8300, 15000, 27000, 46000, 76000],
            costIron: [0, 0, 0, 0, 0, 4500, 9600, 19000],
    	    buildTime: [3600, 6300, 9000, 11700, 14400, 18000, 21600, 25200],
    	    upgradeExp: [0, 25, 30, 35, 40, 40, 45, 50, 55],
    	    instantGold: [0, 37, 52, 95, 122, 179, 250, 345],
    	    levelBuildLimit: [0, 0, 0, 0, 1, 2, 2, 3],
            levelUpgradeLimit: [0, 0, 0, 0, , 3, 4, 5, 7, 8, 9],
    	    info: "Fires long range, high power shells",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Patriot",
    	    hitpoints: [5640, 6120, 6600, 7680, 8760, 9840, 10560],
            damagePerSec: [120, 150, 180, 210, 225, 480, 510],
    	    costCash: [3800, 7500, 11000, 15000, 19000, 23000],
            costIron: [600, 1300, 1900, 2600, 3200, 3800],
    	    buildTime: [7200, 9000, 11700, 14400, 18000, 21600],
    	    upgradeExp: [0, 35, 40, 45, 45, 50, 55],
            instantGold: [0, 87, 112, 133, 159, 185],
            levelBuildLimit: [0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
            levelUpgradeLimit: [0, 0, 0, 0, 0, 0, , 3, 5, 6, 7],
            info: "Fires surface-to-air missiles at enemy aircraft",
            desc: "Patriots provide long range, anti-air capability needed to counter any airborne threat to a base. These SAM launchers are tough against airborne threats, but are unable to engage ground threats.",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
    	{
    	    type: "Defenses",
    	    name: "Shock Mine",
    	    hitpoints: [0, 0, 0],
    	    damagePerSec: [40, 46],
            stunDuration: [4.00, 4.50],
    	    costCash: [8000, 0, 0],
            costIron: [1800],
    	    buildTime: [0, 5400, ],
    	    upgradeExp: [0, 45, ],
            instantGold: [0, 237, ],
    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
    	    levelUpgradeLimit: [0, 0, 0, 0, 0, 0, 0, 0, , ],
    	    info: "Activates to stun enemy vehicles within small area",
            desc: "Shock Mines deal limited damage, but the EMP blast they release immobilizes all vehicles with close proximity to the mine.",
    	    imageFile: function () {
    	        return this.name.replace(/\s/g, '') + ".gif";
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
    	        return this.name.replace(/\s/g, '') + ".gif";
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
    	        return this.name.replace(/\s/g, '') + ".gif";
    	    }
    	},
        {
            type: "Resources",
            name: "Oil Derrick",
            hitpoints: [1000, 1200, 1400, 1700, 2000, 2400, 2750, 3500, 3950, 5000, 5600],
            costCash: [300, 600, 1350, 2400, 4500, 8300, 15000, 25000, 42000, 67000, 105000],
            costIron: [0, 0, 0, 0, 0, 0, 2500, 5200, 11000, 20000, 37000],
            costTech: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4400],
            buildTime: [60, 60, 3600, 5400, 7200, 9000, 11700, 14400, 18000, 21600, 25200],
            upgradeExp: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            instantGold: [0, 4, 27, 35, 47, 65, 100, 162, 230, 314, 452],
            levelBuildLimit: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3],
            levelUpgradeLimit: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            productionOilMax: [600, 900, 1600, 2000, 3600, 4200, 6400, 7200, 10000, 12000, 16800],
            productionOilHourly: [201, 302, 403, 497, 597, 698, 799, 900, 1000, 1202, 1397],
            info: "Converts fossil fuels into useable energy",
            desc: "The Oil Derrick produces the fuel needed to build and upgrade units and command powers. Fuel stored in the Oil Derrick must be stored in the Fuel Stockpile before it is availble for use.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Fuel Stockpile",
            hitpoints: [1560, 1620, 1818, 2118, 2520, 2730, 3480, 3780],
            costCash: [1100, 2200, 4400, 8200, 15000, , 46000, 76000],
            costIron: [0, 0, 0, 0, 0, 4500, 9500, 19000],
            buildTime: [3, 1800, 3600, 5400, 8100, 10800, 13500, 18900],
            upgradeExp: [0, 10, 15, 20, 25, 30, 35, 40],
            instantGold: [0, 20, , 55, 79, 127, 215, 318],
            levelBuildLimit: [1, 1, 1, 1, 1, 1, 1, 2],
            levelUpgradeLimit: [1, 2, 3, 4],
            storageCapacityOil: [1000, 3000, 5000, 10000, 21000, 69000, 120000, 230000],
            info: "Contains and protects fuel",
            desc: "The Fuel Stockpile is the storage container for all ready base fuel. Upgrades to this stockpile increase its storage capacity.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Supply Drop",
            hitpoints: [1000, 1200, 1400, 1700, 2000, 2400, 2750, 3500, 3950, 5000, 5600],
            costCash: [200, 500, 1250, 2200, 4100, 7500, 13000, 23000, 38000, 61000, 95000],
            costIron: [0, 0, 0, 0, 0, 0, 2300, 4700, 9600, 18000, 34000],
            costTech: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4000],
            buildTime: [60, 60, 2700, 4500, 6300, 8100, 10800, 13500, 14400, 18000, 21600],
            upgradeExp: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            instantGold: [0, 4, 21, 32, 43, 60, 92, 153, 202, 282, 414],
            levelBuildLimit: [1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
            levelUpgradeLimit: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            productionCashMax: [600, 900, 1600, 2000, 3600, 4200, 6400, 7200, 10000, 12000, 16800],
            productionCashHourly: [201, 302, 403, 497, 597, 698, 799, 900, 1000, 1202, 1397],
            info: "Collects supply drops from global reinforcements",
            desc: "The Supply Drop is where supplies are delivered by central command. Supplies dropped here must be stored at the stockpile before they are available to be spent.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Supply Stockpile",
            hitpoints: [1560, 1620, 1818, 2118, 2520, 2730, 3480, 3780, 4950],
            costCash: [1100, 2300, 4400, 8400, , 27000, 47000, 77000, 124000],
            costIron: [0, 0, 0, 0, 0, 4600, 9700, 19000, 38000],
            buildTime: [3, 1800, 3600, 5400, , 10800, 13500, 18900, 24300],
            upgradeExp: [0, 10, 15, 20, 25, 30, 35, 40, 45],
            instantGold: [0, 20, 37, 55, , 128, 218, 320, 456],
            levelBuildLimit: [1, 1, 1, 1, 1, 1, 2],
            levelUpgradeLimit: [1, 2, 3, 4, 5, 6, 7, 8],
            storageCapacityCash: [1000, 5000, 10000, 18000, 32000, 55000, 64000, 100000, 160000],
            info: "Contains and protects suppliers",
            desc: "The Supply Stockpile is where all supplies ready for production are stored. As the stockpile's level is increased, its total storage capacity is increased.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Steel Stockpile",
            hitpoints: [2730, 3480, 3780, 4950, 5490],
            costCash: [15000, 27000, 47000, 78000, 126000],
            costIron: [0, 4600, 9800, 20000, 38000],
            buildTime: [3600, 7200, 12600, 18000, 25200],
            upgradeExp: [0, 30, 35, 40, 45],
            instantGold: [0, 118, 214, 320, 462],
            storageCapacityIron: [5000, 11000, 23000, 44000, 57000],
            levelBuildLimit: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2],
            info: "Contains and protects steel",
            desc: "The Steel Stockpile is the base's warehouse for all steel ready for building. Upgrade this stockpile to increase the base's total steel storage capacity.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Steel Factory",
            hitpoints: [2100, 2370, 3000, 3360, 3780],
            costCash: [16000, 27400, 45400, 73200, 114000],
            costIron: [2700, 5700, 11500, 22100, 40700],
            costTech: [0, 0, 0, 0, 4800],
            buildTime: [3600, 5400, 7200, 9000, 10800],
            upgradeExp: [0, 35, 40, 45, 50],
            instantGold: [0, 128, 190, 275, 408],
            productionIronMax: [2500, 5500, 6000, 8500, 10000],
            productionIronHourly: [601, 687, 770, 856, 1029],
            levelBuildLimit: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            levelUpgradeLimit: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5],
            info: "Converts smelted iron from the earth into steel",
            desc: "The Steel Factory produces Steel for advanced construction and upgrades. Steel must be stored at the Steel Stockpile before it can be used.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Tech Stockpile",
            hitpoints: [5490, 6330, ],
            costCash: [88000, 137000, ],
            costIron: [27000, 49000, ],
            costTech: [0, 5800],
            buildTime: [9000, 14400, ],
            upgradeExp: [0, 50, , , , , , , , ],
            instantGold: [0, 472],
            levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            levelUpgradeLimit: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
            storageCapacityTech: [10000, 23000, ],
            info: "Contains and protects tech",
            desc: "The Tech Stockpile is where all Tech is stored while waiting to be used to upgrade base structures and systems. The total capacity of this stockpile is increased as its level is increased.",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            type: "Resources",
            name: "Tech Factory",
            hitpoints: [0, 0, 0],
            costCash: [118000, , ],
            costIron: [42000, , ],
            costTech: [5000, , ],
            buildTime: [3600, , ],
            upgradeExp: [0, 0, 0],
            levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            levelUpgradeLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            info: "Researches technology used for high-tech warfare",
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
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
            damagePerSec: [30, 33, 36, 39, 39, 44, 46],
            healPerSec: [0, 0, 0, 0, 4, 4, 5],
            hitpoints: [140, 176, 210, 253, 302, 329, 359],
            trainingCost: [25, 50, 100, 150, 200, 250, 300],
            upgradeCost: [0, 8000, 16000, 31000, 58000, 102000, 172000],
            upgradeTime: [0, 3600, 7200, 10800, 16200, 21600, 28800],
            trainingTime: 7,
            requiredLevel: 1,
            upgradeExp: [0, 20, 25, 30, 30, 35, 40],
            instantGold: [0, 49, 78, 139, 216, 326, 441],
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Striker VI",
            info: "The Striker VI is a fast, armored vehicle that gets in close to give cover for other units. Weak vs Tanks and Spider Drones; Strong vs Enemy Infantry and Aircraft",
            population: 3,
            damageType: "Single Target",
            targets: "Structures, Units",
            damagePerSec: [50, 55, 65, 70, 85, 90],
            hitpoints: [1277, 1596, 1915, 2298, 2649, 2914],
            trainingCost: [100, 200, 300, 400, 500, 600],
            upgradeCost: [0, 9500, 19000, 38000, 69000, 122000],
            upgradeTime: [0, 7200, 10800, 14400, 19800, 25200],
            trainingTime: 20,
            requiredLevel: 2,
            upgradeExp: [0, 20, 25, 30, 30, 35],
            instantGold: [0, 64, 94, 168, 254, 365],
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Tank",
            info: "The Tank is a heavily armored, hard hitting combatant. Weak vs Aircraft and Spider Drones; Strong vs enemy vehicles and defense structures",
            population: 6,
            damageType: "Single Target",
            targets: "Ground, Structures",
            damagePerSec: [90, 105, 125, 140, 160, 175],
            hitpoints: [3120, 3360, 3600, 3840, 4080, 4320],
            trainingCost: [200, 400, 600, 800, 1000, 1200],
            upgradeCost: [0, , 21000, 40000, 73000, 129000],
            upgradeTime: [0, , 12600, 16200, 21600, 28800],
            upgradeExp: [0, 20, 25, 30, 35, 40],
            instantGold: [0, , 104, 180, 270, 389],
            trainingTime: 60,
            requiredLevel: 4,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Attack Drones",
            info: "Attack Drones are light, fast swarms that hunt and kill enemy defense structures. Weak vs Anti-air defenses and enemy infantry; Strong vs ground targets",
            population: 2,
            damageType: "Single Target",
            targets: "Structures, Units",
            damagePerSec: [51, 54, 63, 72, 78, 81],
            hitpoints: [185, 228, 274, 332, 390, 442],
            trainingCost: [375, 750, 1125, 1200, 1500, 1800],
            upgradeCost: [0, 9800, 20000, 38000, 71000, 125000],
            upgradeTime: [0, 7200, 10800, 14400, 18000, 21600],
            upgradeExp: [0, 30, 35, 40, 40, 45],
            instantGold: [0, 65, 117, 168, 250, 354],
            trainingTime: 15,
            requiredLevel: 6,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Tomahawk",
            info: "The Unmanned Ground Vehicle (UGV) provides long range, area clearing fire support. Weak vs Aircraft and nearby enemies, Strong at long range",
            population: 3,
            damageType: "Area",
            targets: "Ground, Structures",
            damagePerSec: [85, 90, 95, 105],
            hitpoints: [301, 336, 373, 408],
            trainingCost: [400, 800, 1200, 1600],
            upgradeCost: [0, 10000, , 40000],
            upgradeTime: [0, 9000, 12600, 16200],
            upgradeExp: [0, 40, 40, 45],
            instantGold: [0, 89, 127, 180],
            trainingTime: 92,
            requiredLevel: 8,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Stealth Tank",
            info: "Invisible hunters firing an EMP burst, Stealth Tanks can shut down enemy defenses. Weak vs enemy infantry; Strong vs enemy vehicles and Defense structures",
            population: 4,
            stunDuration: 2.20,
            damageType: "Single Target",
            targets: "Air, Structures, Units",
            damagePerSec: [30, 36],
            hitpoints: [2016, 2167],
            trainingCost: [500, 1000],
            upgradeCost: [],
            upgradeTime: [],
            upgradeExp: [0, 50],
            instantGold: [0],
            trainingTime: 141,
            requiredLevel: 10,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Apache",
            info: "Apaches provides overwhelming airborne firepower that can win any battle. Weak vs Patriots and Domed Aerial Defenses; Strong vs ground targets",
            population: 7,
            damageType: "Single Target",
            targets: "Vehicles, Structures, Units",
            damagePerSec: [236, 254],
            hitpoints: [4339, 4652],
            trainingCost: [600, 1200],
            upgradeCost: [],
            upgradeTime: [],
            upgradeExp: [0, 60],
            instantGold: [0],
            trainingTime: 180,
            requiredLevel: 12,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "CnC Vehicle",
            info: "The CnC Vehicle force multiplier. It hacks enemy defenses and boosts nearby allied units. Weak vs enemy vehicles; Strong vs enemy Defense structures",
            population: 15,
            damageType: "Area",
            targets: "Structures, Units",
            damageIncrease: ['50%'],
            hitpoints: [2880, 2976],
            trainingCost: [700, 1400],
            upgradeCost: [],
            upgradeTime: [],
            upgradeExp: [0, 70],
            instantGold: [0],
            trainingTime: 1200,
            requiredLevel: 14,
            hackCount: 1,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Medivac",
            info: "The Medivac prvides battlefield repairs and healing. Motto: 'That others may live.' Weak vs enemy units, Strong healing support to allies",
            population: 6,
            damageType: "Area",
            targets: "Structures, Units",
            healPerSec: [164, 170],
            hitpoints: [960, 1056],
            trainingCost: [800, 1600],
            upgradeCost: [],
            upgradeTime: [],
            upgradeExp: [0, 80],
            instantGold: [0],
            trainingTime: 240,
            requiredLevel: 16,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "LGL Troops",
            info: "LGL Troopers use laser-guided lightning to quickly melt away enemies. Weak vs Aircraft; Strong vs enemy Defense Structures",
            population: 3,
            damageType: "Single Target",
            targets: "Ground, Structures",
            damagePerSec: [220, 230],
            hitpoints: [3600, 3720],
            trainingCost: [6000, 6250],
            upgradeCost: [],
            upgradeTime: [],
            upgradeExp: [0, 90],
            instantGold: [0],
            trainingTime: 120,
            requiredLevel: 18,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        },
        {
            name: "Titan Tank",
            info: "Titan Tanks are the kings of the battlefield. Twin cannons, rocket pods and wall crushers. Weak vs Railguns and Domed THEL; Strong vs everything!!",
            population: 18,
            damageType: "Single Target",
            targets: "Ground, Air, Structures",
            damagePerSec: [1400, 1800],
            hitpoints: [30000, 32400],
            trainingCost: [19000, 20000],
            upgradeCost: [],
            upgradeTime: [],
            upgradeExp: [0, 100],
            instantGold: [0],
            trainingTime: 900,
            requiredLevel: 20,
            imageFile: function () {
                return this.name.replace(/\s/g, '') + ".gif";
            }
        }
];


//var structures = [
//        {
//            type: "Default",
//            name: "HQ",
//            hitpoints: [6930, 7200, 8085, 9408, 11592, 0, 15120, 16443],
//            costCash: [0, 1000, 4500, 9900, 0, 0, 0, 91000],
//            costIron: [0, 0, 0, 0, 0, 0, 0, 23000],
//            buildTime: [0, 180, 3600, 7200, 0, 0, 0, 28800],
//            instantGold: [0, 7, 37, 65, 0, 0, 0, 353],
//            storageCapacityOil: 2000,
//            storageCapacityCash: 2000,
//            storageCapacityIron: [0, 0, 0, 0, 2000, 2000, 2000, 2000],
//            desc: "The HQ is the central command structure for the entire base. Its level dictates what units and structures can be built at the base.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Default",
//            name: "Weapons Command",
//            hitpoints: [1200, 1300, 0],
//            costCash: [0, 1200, 0],
//            buildTime: [0, 300, 0],
//            upgradeExp: [0, 20, 0],
//            instantGold: [0, 8],
//            levelUpgradeLimit: [1, 1, 1, 2],
//            commandPoints: [14, 16, 0],
//            desc: "Add Command Points per upgrade level. Unlock new Command Powers by upgrading your HQ.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Operations",
//            name: "Engineer",
//            buildTime: [0],
//            instantGold: [750],
//            levelBuildLimit: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
//            info: "Multiple engineers allow you to build or upgrade multiple structures at once",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Operations",
//            name: "Troop Tarmac",
//            costCash: [300, 4800, 17000, 50000],
//            buildTime: [3, 1800, 6300, 12600],
//            upgradeExp: [0, 15, 25, 35, 45],
//            instantGold: [0, 28, 77, 198],
//            levelBuildLimit: [2, 3, 3, 4, 4, 5, 5],
//            levelUpgradeLimit: [1, 1, 2, 2, 3, 0, 4],
//            troopCapacity: [9, 10, 11, 12, 13],
//            info: "Displays trained units ready for battle",
//            desc: "Troop Tarmacs are the staging positions for units ready for battle. Upgrading the tarmacs increases the number of troops that the tarmac can support.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Operations",
//            name: "Storage Bunker",
//            hitpoints: [1100, 1200, 0],
//            costCash: [0, 1600, 0],
//            buildTime: [0, 1800, 0],
//            upgradeExp: [0, 20, 0],
//            instantGold: [0, 18],
//            levelUpgradeLimit: [0, 0, 0],
//            storageCapacityOil: [1000, 2000],
//            storageCapacityCash: [1000, 2000],
//            storageReserve: [0.5, 0.52],
//            info: "Protects resources from enemy attacks",
//            desc: "The Storage Bunker is a hardened, secure stockpile. Resources stored in the reserve cannot be captured by enemies. As its level increases, the amount of resources it can protect are increased.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Operations",
//            name: "Alliance Building",
//            hitpoints: [0, 0, 0],
//            costCash: [0, 0, 0],
//            buildTime: [0, 0, 0],
//            upgradeExp: [0, 0, 0],
//            instantGold: [0, 0],
//            levelBuildLimit: [0, 0, 1],
//            info: "Use to ally with friends from around the world",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Operations",
//            name: "Research Agency",
//            hitpoints: [0, 0, 0],
//            costCash: [1200, 0, 0],
//            buildTime: [3600, 0, 0],
//            upgradeExp: [0, 0, 0],
//            levelBuildLimit: [0, 0, 0, 1],
//            info: "Upgrades units and weapons",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//    	{
//    	    type: "Defenses",
//    	    name: "Wall",
//    	    hitpoints: [180, 200, 0],
//    	    costCash: [100, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [20, 30, 40, 50],
//    	    levelUpgradeLimit: [1, 1, 2],
//    	    info: "Protects against attacking troops",
//    	    desc: "Walls are used to enclose and protect vital base structures and control movement of enemy forces. The amount of damage they can sustain before breaking increases as they are upgraded.",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Guard Tower",
//    	    hitpoints: [1837, 0, 0, 0],
//    	    costCash: [150, 700, 2500, 5400],
//    	    buildTime: [3, 300, 900, 2700],
//    	    upgradeExp: [0, 10, 15, 20],
//    	    instantGold: [0, 6, 16, 35],
//    	    levelBuildLimit: [1, 2, 2, 2, 3],
//    	    damagePerSec: [36, 44, 56, 68],
//    	    info: "Fires a machine gun at attacking ground forces",
//    	    desc: "The Guard Tower provides basic, medium range defense against enemy forces.",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Domed Defense",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [900, 0, 0],
//    	    buildTime: [1800, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    instantGold: [0, 0],
//    	    levelBuildLimit: [0, 0, 1, 2],
//    	    info: "Multiple weapon systems within an armored dome",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Rally Flag",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [800, 0, 0],
//    	    buildTime: [3, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    instantGold: [0, 0],
//    	    levelBuildLimit: [0, 0, 2, 2],
//    	    info: "Set guards or patrols on base for improved defenses",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Landmine",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [100, 0, 0],
//    	    buildTime: [0, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [0, 0, 0, 4],
//    	    damagePerSec: 58,
//    	    info: "Explodes to damage any ground unit within small area",
//    	    desc: "The proximity fused Landmine is a cheap, effective counter to light enemy units. They damage any enemy nearby.",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Artillery",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [0, 0, 0],
//    	    buildTime: [0, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [0, 0, 0, 0],
//    	    info: "Fires long range, high power shells",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Patriot",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [0, 0, 0],
//    	    buildTime: [0, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [0, 0, 0, 0, 0, 0],
//    	    info: "Fires surface-to-air missiles at enemy aircraft",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Shock Mine",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [0, 0, 0],
//    	    buildTime: [0, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0],
//    	    info: "Activates to stun enemy vehicles within small area",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Metal Rain",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [0, 0, 0],
//    	    buildTime: [0, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    	    info: "Fires a barrage of 40mm grenades",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//    	{
//    	    type: "Defenses",
//    	    name: "Railgun",
//    	    hitpoints: [0, 0, 0],
//    	    costCash: [0, 0, 0],
//    	    buildTime: [0, 0, 0],
//    	    upgradeExp: [0, 0, 0],
//    	    levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//    	    info: "Accelerates projectiles with unparalleled force",
//    	    imageFile: function () {
//    	        return returnGif(this.name);
//    	    }
//    	},
//        {
//            type: "Resources",
//            name: "Oil Derrick",
//            hitpoints: [1000, 1200, 1400, 1700, 2000],
//            costCash: [0, 600, 1350, 0, 4500],
//            buildTime: [0, 60, 3600, 0, 7200],
//            upgradeExp: [0, 5, 10, 0, 20],
//            instantGold: [0, 4, 27, 0, 47],
//            levelBuildLimit: [1, 1, 1, 1, 2],
//            productionOilMax: [600, 900, 1600, 2000, 3600],
//            productionOilHourly: [201, 302, 403, 497, 597],
//            info: "Converts fossil fuels into useable energy",
//            desc: "The Oil Derrick produces the fuel needed to build and upgrade units and command powers. Fuel stored in the Oil Derrick must be stored in the Fuel Stockpile before it is availble for use.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Fuel Stockpile",
//            hitpoints: [2600, 2700, 3030, 3530, 0, 4550, 5800],
//            costCash: [1100, 2200, 0, 8200, 0, 0, 46000],
//            buildTime: [3, 1800, 0, 5400, 0, 0, 13500],
//            upgradeExp: [0, 10, 15, 20, 0, 0, 35],
//            instantGold: [0, 20, 0, 55, 0, 0, 190],
//            levelBuildLimit: [1, 1, 1, 1, 1, 1, 1, 2],
//            levelUpgradeLimit: [1, 2, 3, 4],
//            storageCapacityOil: [1000, 3000, 5000, 10000, 0, 69000, 120000],
//            info: "Contains and protects fuel",
//            desc: "The Fuel Stockpile is the storage container for all ready base fuel. Upgrades to this stockpile increase its storage capacity.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Supply Drop",
//            hitpoints: [1000, 1200, 1400, 1700, 2000, 0, 2750, 3500],
//            costCash: [200, 500, 1250, 0, 4100, 0, 0, 23000],
//            buildTime: [60, 60, 2700, 0, 6300, 0, 0, 13500],
//            upgradeExp: [0, 5, 10, 0, 20, 0, 0, 35],
//            instantGold: [0, 4, 21, 0, 43, 0, 0, 128],
//            levelBuildLimit: [1, 2, 2, 2, 3],
//            productionCashMax: [600, 900, 1600, 2000, 0, 0, 6400, 7200],
//            productionCashHourly: [201, 302, 403, 497, 0, 0, 799, 900],
//            info: "Collects supply drops from global reinforcements",
//            desc: "The Supply Drop is where supplies are delivered by central command. Supplies dropped here must be stored at the stockpile before they are available to be spent.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Supply Stockpile",
//            hitpoints: [2600, 2700, 3030, 3530],
//            costCash: [1100, 2300, 0, 8400],
//            buildTime: [3, 1800, 0, 5400],
//            upgradeExp: [0, 10, 15, 20],
//            instantGold: [0, 20, 0, 55],
//            levelBuildLimit: [1, 1, 1, 1, 1, 1, 2],
//            levelUpgradeLimit: [1, 2, 3, 4],
//            storageCapacityCash: [1000, 5000, 10000, 18000],
//            info: "Contains and protects suppliers",
//            desc: "The Supply Stockpile is where all supplies ready for production are stored. As the stockpile's level is increased, its total storage capacity is increased.",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Steel Stockpile",
//            hitpoints: [0, 0, 0],
//            costCash: [0, 0, 0],
//            buildTime: [0, 0, 0],
//            upgradeExp: [0, 0, 0],
//            instantGold: [0, 0],
//            levelBuildLimit: [0, 0, 0, 0, 1],
//            info: "Contains and protects steel",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Steel Factory",
//            hitpoints: [0, 0, 0],
//            costCash: [0, 0, 0],
//            buildTime: [0, 0, 0],
//            upgradeExp: [0, 0, 0],
//            levelBuildLimit: [0, 0, 0, 0, 0, 1],
//            info: "Converts smelted iron from the earth into steel",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Tech Stockpile",
//            hitpoints: [0, 0, 0],
//            costCash: [0, 0, 0],
//            buildTime: [0, 0, 0],
//            upgradeExp: [0, 0, 0],
//            levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 1],
//            info: "Contains and protects tech",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            type: "Resources",
//            name: "Tech Factory",
//            hitpoints: [0, 0, 0],
//            costCash: [0, 0, 0],
//            buildTime: [0, 0, 0],
//            upgradeExp: [0, 0, 0],
//            levelBuildLimit: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//            info: "Researches technology used for high-tech warfare",
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        }
//];
//var units = [
//        {
//            name: "Rangers",
//            info: "Rangers are an all-purpose fighting force made up of Riflemen, Rockets and Medics. Weak vs enemy infantry; Strong vs Spider Drones",
//            population: 1,
//            damageType: "Area",
//            targets: "Ground, Air, Structures, Units",
//            healPerSec: [0],
//            damagePerSec: [30, 0, 37],
//            hitpoints: [140, 0, 0],
//            trainingCost: [25, 0, 100],
//            trainingTime: 7,
//            requiredLevel: 1,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Striker VI",
//            info: "The Striker VI is a fast, armored vehicle that gets in close to give cover for other units. Weak vs Tanks and Spider Drones; Strong vs Enemy Infantry and Aircraft",
//            population: 3,
//            damageType: "Single Target",
//            targets: "Structures, Units",
//            damagePerSec: [40, 0, 55],
//            hitpoints: [800, 0, 1200],
//            trainingCost: [100, 0, 300],
//            trainingTime: 20,
//            requiredLevel: 2,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Tank",
//            info: "The Tank is a heavily armored, hard hitting combatant. Weak vs Aircraft and Spider Drones; Strong vs enemy vehicles and defense structures",
//            population: 6,
//            damageType: "Single Target",
//            targets: "Ground, Structures",
//            damagePerSec: [125, 0, 0],
//            hitpoints: [3000, 0, 0],
//            trainingCost: [600, 0, 0],
//            trainingTime: 60,
//            requiredLevel: 4,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Attack Drones",
//            info: "Attack Drones are light, fast swarms that hunt and kill enemy defense structures. Weak vs Anti-air defenses and enemy infantry; Strong vs ground targets",
//            population: 2,
//            damageType: "Single Target",
//            targets: "Structures, Units",
//            damagePerSec: [51, 0, 0],
//            hitpoints: [154, 0, 0],
//            trainingCost: [375, 0, 0],
//            trainingTime: 15,
//            requiredLevel: 6,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Tomahawk",
//            info: "The Unmanned Ground Vehicle (UGV) provides long range, area clearing fire support. Weak vs Aircraft and nearby enemies, Strong at long range",
//            population: 3,
//            damageType: "Area",
//            targets: "Ground, Structures",
//            damagePerSec: [85, 0, 0],
//            hitpoints: [250, 0, 0],
//            trainingCost: [400, 0, 0],
//            trainingTime: 360,
//            requiredLevel: 8,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Stealth Tank",
//            info: "Invisible hunters firing an EMP burst, Stealth Tanks can shut down enemy defenses. Weak vs enemy infantry; Strong vs enemy vehicles and Defense structures",
//            population: 6,
//            damageType: "Single Target",
//            targets: "Air, Structures, Units",
//            damagePerSec: [30, 0, 0],
//            hitpoints: [1400, 0, 0],
//            trainingCost: [500, 0, 0],
//            trainingTime: 720,
//            requiredLevel: 10,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Apache",
//            info: "Apaches provides overwhelming airborne firepower that can win any battle. Weak vs Patriots and Domed Aerial Defenses; Strong vs ground targets",
//            population: 7,
//            damageType: "Single Target",
//            targets: "Vehicles, Structures, Units",
//            damagePerSec: [140, 0, 0],
//            hitpoints: [4950, 0, 0],
//            trainingCost: [600, 0, 0],
//            trainingTime: 600,
//            requiredLevel: 12,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "CnC Vehicle",
//            info: "The CnC Vehicle force multiplier. It hacks enemy defenses and boosts nearby allied units. Weak vs enemy vehicles; Strong vs enemy Defense structures",
//            population: 15,
//            damageType: "Area",
//            targets: "Structures, Units",
//            damagePerSec: [0],
//            hitpoints: [2400, 0, 0],
//            trainingCost: [700, 0, 0],
//            trainingTime: 1500,
//            requiredLevel: 14,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Medivac",
//            info: "The Medivac prvides battlefield repairs and healing. Motto: 'That others may live.' Weak vs enemy units, Strong healing support to allies",
//            population: 6,
//            damageType: "Area",
//            targets: "Structures, Units",
//            healPerSec: [164, 0, 0],
//            damagePerSec: [0],
//            hitpoints: [290, 0, 0],
//            trainingCost: [800, 0, 0],
//            trainingTime: 420,
//            requiredLevel: 16,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "LGL Troops",
//            info: "LGL Troopers use laser-guided lightning to quickly melt away enemies. Weak vs Aircraft; Strong vs enemy Defense Structures",
//            population: 3,
//            damageType: "Single Target",
//            targets: "Ground, Structures",
//            damagePerSec: [220, 0, 0],
//            hitpoints: [3000, 0, 0],
//            trainingCost: [6000, 0, 0],
//            trainingTime: 240,
//            requiredLevel: 18,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//        {
//            name: "Titan Tank",
//            info: "Titan Tanks are the kings of the battlefield. Twin cannons, rocket pods and wall crushers. Weak vs Railguns and Domed THEL; Strong vs everything!!",
//            population: 18,
//            damageType: "Single Target",
//            targets: "Ground, Air, Structures",
//            damagePerSec: [900, 0, 0],
//            hitpoints: [25000, 0, 0],
//            trainingCost: [19000, 0, 0],
//            trainingTime: 1800,
//            requiredLevel: 20,
//            imageFile: function () {
//                return returnGif(this.name);
//            }
//        },
//];