"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHomeInput = exports.generateInput = void 0;
const generateInput = (othersOpinions, currentScores, node, recentChatHistory, infoToPass, luck) => {
    const st = `
        Info To Pass On: ${infoToPass}
        Island Description: ${node.getNodeString()}
        Chat History: ${recentChatHistory.map((msgInfo) => `(${msgInfo.sender}) ${msgInfo.message}`).join("; ")}
        Number in Crew Scores: ${currentScores.numCrew}
        Ship Quality (of 100): ${currentScores.shipQuality}
        Food (2 consumed per day): ${currentScores.food}
        Time (days): ${currentScores.time}
        Fame: ${currentScores.fame}
        Luck (use as a d20 roll to determine how likely this is to succeed, only actions within reason may succeed): ${luck}
        Message Responding To: ${recentChatHistory[recentChatHistory.length - 1].message}
    `.trim();
    console.log("st is ", st);
    return st;
};
exports.generateInput = generateInput;
const generateHomeInput = (othersOpinions, currentScores, node, recentChatHistory, infoToPass, luck, numSuitors) => {
    const st = `
        Info To Pass On: ${infoToPass}
        Island Description: ${node.getNodeString()}
        Chat History: ${recentChatHistory.map((msgInfo) => `(${msgInfo.sender}) ${msgInfo.message}`).join("; ")}
        Number in Crew Scores: ${currentScores.numCrew}
        Ship Quality (of 100): ${currentScores.shipQuality}
        Food (2 consumed per day): ${currentScores.food}
        Number of suitors left: ${numSuitors}
        Time (days): ${currentScores.time}
        Fame: ${currentScores.fame}
        Luck (use as a d20 roll to determine how likely this is to succeed, only actions within reason may succeed): ${luck}
        Message Responding To: ${recentChatHistory[recentChatHistory.length - 1].message}
    `.trim();
    console.log("home input is ", st);
    return st;
};
exports.generateHomeInput = generateHomeInput;
