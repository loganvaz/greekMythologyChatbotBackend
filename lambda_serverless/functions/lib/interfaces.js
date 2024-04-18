"use strict";
//this is short enough that we can get away with using arrays
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNode = exports.DynamicScoresOfInterest = exports.OthersOpinions = void 0;
function clipScore(n) {
    if (n < -10)
        return -10;
    if (n > 10)
        return 10;
    return n;
}
class OthersOpinions {
    constructor() {
        this.entities = ["crew", "Poseidon"];
        this.opinions = [10, 0];
        this.whys = ["you are generally well liked by the crew", "doesn't have an opinion of you yet"];
    }
    updateSinglePerson(person, newScore, whyAppend) {
        const idx = this.entities.indexOf(person);
        if (idx !== -1) {
            this.opinions[idx] = clipScore(newScore);
            this.whys[idx] += "; " + whyAppend;
        }
        else {
            this.entities.push(person);
            this.opinions.push(clipScore(newScore));
            this.whys.push(whyAppend);
        }
    }
    updateEntities(newScores, newEntities, newWhys) {
        newEntities.forEach((entityName, idx) => {
            const thisWhy = newWhys[idx];
            const thisScore = clipScore(newScores[idx]);
            const matchIdx = this.entities.indexOf(entityName);
            if (matchIdx !== -1) {
                this.whys[matchIdx] += "; later " + thisWhy;
                this.opinions[matchIdx] = thisScore;
                ;
            }
            else {
                this.entities.push(entityName);
                this.opinions.push(thisScore);
                this.whys.push(thisWhy);
            }
        });
    }
    getOpinions() {
        const opiononsToJoin = [];
        this.entities.forEach((entity, idx) => {
            const why = this.whys[idx];
            const opinion = this.opinions[idx];
            opiononsToJoin.push("Entity " + entity + " has an opinion of " + opinion + " due to: " + why);
        });
        return opiononsToJoin.join("\n");
    }
}
exports.OthersOpinions = OthersOpinions;
class DynamicScoresOfInterest {
    constructor() {
        this.fame = 0;
        this.food = 100;
        this.gold = 100;
        this.shipQuality = 100;
        this.time = 0;
        this.numCrew = 50;
    }
    changefood(amountChange) {
        this.food += amountChange;
        if (this.food < 0)
            return true;
        return false;
    }
    changeGold(amountChange) {
        this.gold += amountChange;
        return false;
    }
    changeFame(amountChange) {
        this.fame += amountChange;
        return false;
    }
    //ship crashes
    changeShipQuality(amountChange) {
        this.shipQuality += amountChange;
        if (this.shipQuality < 0)
            return true;
        return false;
    }
    changeTime(amountChange) {
        this.time += amountChange;
        return false;
    }
    changeNumCrew(amountChange) {
        this.numCrew += amountChange;
        if (this.numCrew < 0)
            return true;
        return false;
    }
    getVisibleScores() {
        return {
            food: this.food,
            shipQuality: this.shipQuality,
            time: this.time,
            numCrew: this.numCrew,
            gold: this.gold,
            fame: this.fame
        };
    }
    getFinalScore() {
        return this.food / 100 + this.gold / 50 + this.fame + this.numCrew / 5 + this.shipQuality / 100 - this.time / 32;
    }
}
exports.DynamicScoresOfInterest = DynamicScoresOfInterest;
class MyNode {
    constructor(entranceDescription, components, primarySourceText, specialInstructions, citation) {
        this.entranceDescription = entranceDescription;
        this.components = components;
        this.primarySourceText = primarySourceText;
        this.specialInstructions = specialInstructions;
        this.citation = citation;
    }
    getEntranceDescription() {
        return this.entranceDescription;
    }
    getNodePartString(np) {
        let st = np.who;
        st += "\n\tstatus:" + np.status;
        st += "\n\tfighting strength:" + np.fightingStrength;
        st += "\n\tintelligence:" + np.intelligence;
        st += "\n\tagression:" + np.agression;
        st += "\n\tdescription:" + np.explorerDescription;
        st += "\n\tfighting details:" + np.fightingDetails;
        st += "\n\texhibits xenia::" + np.exhibitsXenia;
        return st;
    }
    getNodeString() {
        let st = "(base description) " + this.getEntranceDescription() + "\n";
        for (const nodePart of this.components) {
            st += this.getNodePartString(nodePart);
        }
        return st;
    }
}
exports.MyNode = MyNode;
;
// export interface GptHomeOutput {
//     thoughts:string
//     whatHappens:string,
//     isAlive:boolean,
//     crewStrength:number,
//     goldGain:number,
//     shipQualityChange:number,
//     timeChange:number,
//     foodChange:number,
//     famousDeedScore:number,
//     toldFriendlyPeopleOfDeeds:number,
//     additionalDataToPassOn:string,
//     peopleOfInterest:Opinions,
//     wonGame:boolean,
//     numSuitorsKilled:number
// }
