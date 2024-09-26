// Numerous number simulations, very customizable!
// Olexandr_43
// No Wi-Fi
// 09/26/2024

(function (Scratch) {
  'use strict';

  class Simulations {
    constructor() {
      this.results = [];
      this.currentBlockId = null; 

      this.getInfo = function () {
        return {
          id: 'Simulations',
          name: 'Simulation Extension',
          blocks: [
            {
              opcode: 'simulateGeneration',
              blockType: Scratch.BlockType.REPORTER,
              text: 'simulate [count] times with values [values] by rule [rule] chance [chance]% decreasing every [decreaseEvery] times by [decreaseAmount]% in random order: [randomOrder]',
              arguments: {
                values: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '11 23 66 889 098'
                },
                count: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 3
                },
                rule: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'rulesMenu',
                  defaultValue: 'nothing'
                },
                chance: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 22
                },
                decreaseEvery: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 1
                },
                decreaseAmount: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 10
                },
                randomOrder: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'booleanMenu',
                  defaultValue: 'false'
                }
              }
            },
            {
              opcode: 'getSimulationResult',
              blockType: Scratch.BlockType.REPORTER,
              text: 'result of simulation [index]',
              arguments: {
                index: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 1
                }
              }
            },
            {
              opcode: 'clearAllResults',
              blockType: Scratch.BlockType.COMMAND,
              text: 'clear all results',
              arguments: {}
            },
            {
              opcode: 'executeBlock',
              blockType: Scratch.BlockType.COMMAND,
              text: 'execute [BLOCK]',
              arguments: {
                BLOCK: {
                  type: Scratch.ArgumentType.BLOCK,
                  defaultValue: 'simulateGeneration'
                }
              }
            },
            {
              opcode: 'getSavedSimulationsCount',
              blockType: Scratch.BlockType.REPORTER,
              text: 'number of saved simulations',
              arguments: {}
            }
          ],
          menus: {
            rulesMenu: {
              items: [
                { text: 'Nothing', value: 'nothing' },
                { text: 'Duplication', value: 'duplication' },
                { text: 'Deletion', value: 'deletion' },
                { text: 'Distortion', value: 'distortion' },
                { text: 'Inversion', value: 'inversion' },
                { text: 'Square Root Extraction', value: 'sqrtExtraction' }
              ]
            },
            booleanMenu: {
              items: [
                { text: 'True', value: 'true' },
                { text: 'False', value: 'false' }
              ]
            }
          }
        };
      };

      this.simulateGeneration = function (args) {
        const values = args.values.split(' ');
        const count = args.count;
        let chance = args.chance;
        const decreaseEvery = args.decreaseEvery;
        const decreaseAmount = args.decreaseAmount;
        const randomOrder = args.randomOrder === 'true'; 
        const rule = args.rule;

        const allResults = [];

        for (let simulation = 0; simulation < count; simulation++) {
          let results = [...values];

          switch (rule) {
            case 'duplication':
              results = this.applyDuplication(results, chance, decreaseEvery, decreaseAmount);
              break;
            case 'deletion':
              results = this.applyDeletion(results, chance, decreaseEvery, decreaseAmount);
              break;
            case 'distortion':
              results = this.applyDistortion(results, chance, decreaseEvery, decreaseAmount);
              break;
            case 'inversion':
              results = this.applyInversion(results, chance, decreaseEvery, decreaseAmount);
              break;
            case 'sqrtExtraction':
              results = this.applySqrtExtraction(results, chance, decreaseEvery, decreaseAmount);
              break;
            case 'nothing':
            default:
              break;
          }

          if (randomOrder) {
            for (let i = results.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [results[i], results[j]] = [results[j], results[i]];
            }
          }

          allResults.push(results.join(' '));
        }

        this.results.push(allResults); 

        return allResults.join('\n');
      };

      this.getSimulationResult = function (args) {
        const index = args.index - 1; 
        if (index >= 0 && index < this.results.length) {
          return this.results[index].join('\n');
        } else {
          return 'Index out of range';
        }
      };

      this.clearAllResults = function () {
        this.results = [];
      };

      this.getSavedSimulationsCount = function () {
        return this.results.length;
      };

      this.executeBlock = function (args) {
        
      };

      this.applyDuplication = function (values, chance, decreaseEvery, decreaseAmount) {
        const results = [];
        for (const value of values) {
          results.push(value);
          let currentChance = chance;
          while (Math.random() * 100 < currentChance) {
            results.push(value);
            if ((results.length + 1) % decreaseEvery === 0) {
              currentChance -= decreaseAmount;
              if (currentChance < 0) currentChance = 0;
            }
          }
        }
        return results;
      };

      this.applyDeletion = function (values, chance, decreaseEvery, decreaseAmount) {
        const results = [];
        for (const value of values) {
          if (Math.random() * 100 < chance) {
            results.push(value);
          }
          let currentChance = chance;
          if ((results.length + 1) % decreaseEvery === 0) {
            currentChance -= decreaseAmount;
            if (currentChance < 0) currentChance = 0;
          }
        }
        return results;
      };

      this.applyDistortion = function (values, chance, decreaseEvery, decreaseAmount) {
        const distortValue = (val) => {
          const length = val.length;
          let newVal;
          do {
            newVal = Math.floor(Math.random() * Math.pow(10, length));
          } while (newVal.toString().length !== length); 
          return newVal;
        };

        const results = [];
        for (const value of values) {
          if (Math.random() * 100 < chance) {
            results.push(distortValue(value));
          } else {
            results.push(value);
          }
          let currentChance = chance;
          if ((results.length + 1) % decreaseEvery === 0) {
            currentChance -= decreaseAmount;
            if (currentChance < 0) currentChance = 0;
          }
        }
        return results;
      };

      this.applyInversion = function (values, chance, decreaseEvery, decreaseAmount) {
        const results = [];
        for (const value of values) {
          if (Math.random() * 100 < chance) {
            results.push(value.split('').reverse().join(''));
          } else {
            results.push(value);
          }
          let currentChance = chance;
          if ((results.length + 1) % decreaseEvery === 0) {
            currentChance -= decreaseAmount;
            if (currentChance < 0) currentChance = 0;
          }
        }
        return results;
      };

      this.applySqrtExtraction = function (values, chance, decreaseEvery, decreaseAmount) {
        const results = [];
        for (const value of values) {
          let numValue = Number(value); 
          if (numValue >= 0 && Math.random() * 100 < chance) { 
            results.push(Math.sqrt(numValue).toFixed(2)); 
          } else {
            results.push(value); 
          }
          let currentChance = chance;
          if ((results.length + 1) % decreaseEvery === 0) {
            currentChance -= decreaseAmount;
            if (currentChance < 0) currentChance = 0;
          }
        }
        return results;
      };
    }
  }

  Scratch.extensions.register(new Simulations());
})(Scratch);