"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = seedDatabase;
// contact-list\app\data\seed.ts
var contact_1 = require("~/types/contact");
var db_server_1 = require("./db.server");
var seedData = [
    {
        "id": "shruti-kapoor",
        "avatar": "https://sessionize.com/image/124e-400o400o2-wHVdAuNaxi8KJrgtN3ZKci.jpg",
        "first_name": "Shruti",
        "last_name": "Kapoor",
        "twitter": "@shrutikapoor08",
        "phone": "+1234567890",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "shruti.kapoor@example.com",
        "favorite": false
    },
    {
        "id": "glenn-reyes",
        "avatar": "https://sessionize.com/image/1940-400o400o2-Enh9dnYmrLYhJSTTPSw3MH.jpg",
        "first_name": "Glenn",
        "last_name": "Reyes",
        "twitter": "@glnnrys",
        "phone": "+1234567891",
        "job": contact_1.JobType.SINGER,
        "active": true,
        "email": "glenn.reyes@example.com",
        "favorite": false
    },
    {
        "id": "ryan-florence",
        "avatar": "https://sessionize.com/image/9273-400o400o2-3tyrUE3HjsCHJLU5aUJCja.jpg",
        "first_name": "Ryan",
        "last_name": "Florence",
        "twitter": "@ryan-florence", // Assuming no twitter if not provided
        "phone": "+1234567892",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "ryan.florence@example.com",
        "favorite": false
    },
    {
        "id": "oscar-newman",
        "avatar": "https://sessionize.com/image/d14d-400o400o2-pyB229HyFPCnUcZhHf3kWS.png",
        "first_name": "Oscar",
        "last_name": "Newman",
        "twitter": "@__oscarnewman",
        "phone": "+1234567893",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "oscar.newman@example.com",
        "favorite": false
    },
    {
        "id": "michael-jackson",
        "avatar": "https://sessionize.com/image/fd45-400o400o2-fw91uCdGU9hFP334dnyVCr.jpg",
        "first_name": "Michael",
        "last_name": "Jackson",
        "twitter": "@moonwalker",
        "phone": "+1234567894",
        "job": contact_1.JobType.SINGER,
        "active": true,
        "email": "michael.jackson@example.com",
        "favorite": false
    },
    {
        "id": "christopher-chedeau",
        "avatar": "https://sessionize.com/image/b07e-400o400o2-KgNRF3S9sD5ZR4UsG7hG4g.jpg",
        "first_name": "Christopher",
        "last_name": "Chedeau",
        "twitter": "@Vjeux",
        "phone": "+1234567895",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "christopher.chedeau@example.com",
        "favorite": false
    },
    {
        "id": "cameron-matheson",
        "avatar": "https://sessionize.com/image/262f-400o400o2-UBPQueK3fayaCmsyUc1Ljf.jpg",
        "first_name": "Cameron",
        "last_name": "Matheson",
        "twitter": "@cmatheson",
        "phone": "+1234567896",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "cameron.matheson@example.com",
        "favorite": false
    },
    {
        "id": "brooks-lybrand",
        "avatar": "https://sessionize.com/image/820b-400o400o2-Ja1KDrBAu5NzYTPLSC3GW8.jpg",
        "first_name": "Brooks",
        "last_name": "Lybrand",
        "twitter": "@BrooksLybrand",
        "phone": "+1234567897",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "brooks.lybrand@example.com",
        "favorite": false
    },
    {
        "id": "alex-anderson",
        "avatar": "https://sessionize.com/image/df38-400o400o2-JwbChVUj6V7DwZMc9vJEHc.jpg",
        "first_name": "Alex",
        "last_name": "Anderson",
        "twitter": "@ralex1993",
        "phone": "+1234567898",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "alex.anderson@example.com",
        "favorite": false
    },
    {
        "id": "kent-c-dodds",
        "avatar": "https://sessionize.com/image/5578-400o400o2-BMT43t5kd2U1XstaNnM6Ax.jpg",
        "first_name": "Kent C.",
        "last_name": "Dodds",
        "twitter": "@kentcdodds",
        "phone": "+1234567899",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "kentc.dodds@example.com",
        "favorite": false
    },
    {
        "id": "nevi-shah",
        "avatar": "https://sessionize.com/image/c9d5-400o400o2-Sri5qnQmscaJXVB8m3VBgf.jpg",
        "first_name": "Nevi",
        "last_name": "Shah",
        "twitter": "@nevikashah",
        "phone": "+1234567800",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "nevi.shah@example.com",
        "favorite": false
    },
    {
        "id": "andrew-petersen",
        "avatar": "https://sessionize.com/image/2694-400o400o2-MYYTsnszbLKTzyqJV17w2q.png",
        "first_name": "Andrew",
        "last_name": "Petersen",
        "twitter": "@moonwalker2",
        "phone": "+1234567801",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "andrew.petersen@example.com",
        "favorite": false
    },
    {
        "id": "scott-smerchek",
        "avatar": "https://sessionize.com/image/907a-400o400o2-9TM2CCmvrw6ttmJiTw4Lz8.jpg",
        "first_name": "Scott",
        "last_name": "Smerchek",
        "twitter": "@smerchek",
        "phone": "+1234567802",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "scott.smerchek@example.com",
        "favorite": false
    },
    {
        "id": "giovanni-benussi",
        "avatar": "https://sessionize.com/image/08be-400o400o2-WtYGFFR1ZUJHL9tKyVBNPV.jpg",
        "first_name": "Giovanni",
        "last_name": "Benussi",
        "twitter": "@giovannibenussi",
        "phone": "+1234567803",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "giovanni.benussi@example.com",
        "favorite": false
    },
    {
        "id": "igor-minar",
        "avatar": "https://sessionize.com/image/f814-400o400o2-n2ua5nM9qwZA2hiGdr1T7N.jpg",
        "first_name": "Igor",
        "last_name": "Minar",
        "twitter": "@IgorMinar",
        "phone": "+1234567804",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "igor.minar@example.com",
        "favorite": false
    },
    {
        "id": "brandon-kish",
        "avatar": "https://sessionize.com/image/fb82-400o400o2-LbvwhTVMrYLDdN3z4iEFMp.jpeg",
        "first_name": "Brandon",
        "last_name": "Kish",
        "twitter": "@moonwalker32",
        "phone": "+1234567805",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "brandon.kish@example.com",
        "favorite": false
    },
    {
        "id": "arisa-fukuzaki",
        "avatar": "https://sessionize.com/image/fcda-400o400o2-XiYRtKK5Dvng5AeyC8PiUA.png",
        "first_name": "Arisa",
        "last_name": "Fukuzaki",
        "twitter": "@arisa_dev",
        "phone": "+1234567806",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "arisa.fukuzaki@example.com",
        "favorite": false
    },
    {
        "id": "alexandra-spalato",
        "avatar": "https://sessionize.com/image/c8c3-400o400o2-PR5UsgApAVEADZRixV4H8e.jpeg",
        "first_name": "Alexandra",
        "last_name": "Spalato",
        "twitter": "@alexadark",
        "phone": "+1234567807",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "alexandra.spalato@example.com",
        "favorite": false
    },
    {
        "id": "cat-johnson",
        "avatar": "https://sessionize.com/image/7594-400o400o2-hWtdCjbdFdLgE2vEXBJtyo.jpg",
        "first_name": "Cat",
        "last_name": "Johnson",
        "twitter": "@moonwalkeree",
        "phone": "+1234567808",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "cat.johnson@example.com",
        "favorite": false
    },
    {
        "id": "ashley-narcisse",
        "avatar": "https://sessionize.com/image/5636-400o400o2-TWgi8vELMFoB3hB9uPw62d.jpg",
        "first_name": "Ashley",
        "last_name": "Narcisse",
        "twitter": "@_darkfadr",
        "phone": "+1234567809",
        "job": contact_1.JobType.SINGER,
        "active": true,
        "email": "ashley.narcisse@example.com",
        "favorite": false
    },
    {
        "id": "edmund-hung",
        "avatar": "https://sessionize.com/image/6aeb-400o400o2-Q5tAiuzKGgzSje9ZsK3Yu5.JPG",
        "first_name": "Edmund",
        "last_name": "Hung",
        "twitter": "@_edmundhung",
        "phone": "+1234567810",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "edmund.hung@example.com",
        "favorite": false
    },
    {
        "id": "clifford-fajardo",
        "avatar": "https://sessionize.com/image/30f1-400o400o2-wJBdJ6sFayjKmJycYKoHSe.jpg",
        "first_name": "Clifford",
        "last_name": "Fajardo",
        "twitter": "@cliffordfajard0",
        "phone": "+1234567811",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "clifford.fajardo@example.com",
        "favorite": false
    },
    {
        "id": "erick-tamayo",
        "avatar": "https://sessionize.com/image/6faa-400o400o2-amseBRDkdg7wSK5tjsFDiG.jpg",
        "first_name": "Erick",
        "last_name": "Tamayo",
        "twitter": "@ericktamayo",
        "phone": "+1234567812",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "erick.tamayo@example.com",
        "favorite": false
    },
    {
        "id": "paul-bratslavsky",
        "avatar": "https://sessionize.com/image/feba-400o400o2-R4GE7eqegJNFf3cQ567obs.jpg",
        "first_name": "Paul",
        "last_name": "Bratslavsky",
        "twitter": "@codingthirty",
        "phone": "+1234567813",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "paul.bratslavsky@example.com",
        "favorite": false
    },
    {
        "id": "pedro-cattori",
        "avatar": "https://sessionize.com/image/c315-400o400o2-spjM5A6VVfVNnQsuwvX3DY.jpg",
        "first_name": "Pedro",
        "last_name": "Cattori",
        "twitter": "@pcattori",
        "phone": "+1234567814",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "pedro.cattori@example.com",
        "favorite": false
    },
    {
        "id": "andre-landgraf",
        "avatar": "https://sessionize.com/image/eec1-400o400o2-HkvWKLFqecmFxLwqR9KMRw.jpg",
        "first_name": "Andre",
        "last_name": "Landgraf",
        "twitter": "@AndreLandgraf94",
        "phone": "+1234567815",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "andre.landgraf@example.com",
        "favorite": false
    },
    {
        "id": "monica-powell",
        "avatar": "https://sessionize.com/image/c73a-400o400o2-4MTaTq6ftC15hqwtqUJmTC.jpg",
        "first_name": "Monica",
        "last_name": "Powell",
        "twitter": "@indigitalcolor",
        "phone": "+1234567816",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "monica.powell@example.com",
        "favorite": false
    },
    {
        "id": "brian-lee",
        "avatar": "https://sessionize.com/image/cef7-400o400o2-KBZUydbjfkfGACQmjbHEvX.jpeg",
        "first_name": "Brian",
        "last_name": "Lee",
        "twitter": "@brian_dlee",
        "phone": "+1234567817",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "brian.lee@example.com",
        "favorite": false
    },
    {
        "id": "sean-mcquaid",
        "avatar": "https://sessionize.com/image/f83b-400o400o2-Pyw3chmeHMxGsNoj3nQmWU.jpg",
        "first_name": "Sean",
        "last_name": "McQuaid",
        "twitter": "@SeanMcQuaidCode",
        "phone": "+1234567818",
        "job": contact_1.JobType.PAINTER,
        "active": true,
        "email": "sean.mcquaid@example.com",
        "favorite": false
    },
    {
        "id": "shane-walker",
        "avatar": "https://sessionize.com/image/a9fc-400o400o2-JHBnWZRoxp7QX74Hdac7AZ.jpg",
        "first_name": "Shane",
        "last_name": "Walker",
        "twitter": "@swalker326",
        "phone": "+1234567819",
        "job": contact_1.JobType.WRITER,
        "active": true,
        "email": "shane.walker@example.com",
        "favorite": false
    },
    {
        "id": "jon-jensen",
        "avatar": "https://sessionize.com/image/6644-400o400o2-aHnGHb5Pdu3D32MbfrnQbj.jpg",
        "first_name": "Jon",
        "last_name": "Jensen",
        "twitter": "@jenseng",
        "phone": "+1234567820",
        "job": contact_1.JobType.ACTOR,
        "active": true,
        "email": "jon.jensen@example.com",
        "favorite": false
    }
];
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, seedData_1, contact, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, , 7]);
                    console.log('Starting database seed...');
                    // Clear existing data (optional - remove if you want to keep existing data)
                    return [4 /*yield*/, (0, db_server_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["DELETE FROM contacts"], ["DELETE FROM contacts"])))];
                case 1:
                    // Clear existing data (optional - remove if you want to keep existing data)
                    _b.sent();
                    _i = 0, seedData_1 = seedData;
                    _b.label = 2;
                case 2:
                    if (!(_i < seedData_1.length)) return [3 /*break*/, 5];
                    contact = seedData_1[_i];
                    return [4 /*yield*/, (0, db_server_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        INSERT INTO contacts (\n          id, first_name, last_name, avatar, twitter, notes, \n          favorite, email, phone, job, active\n        ) VALUES (\n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", "\n        )\n        ON CONFLICT (id) DO NOTHING\n      "], ["\n        INSERT INTO contacts (\n          id, first_name, last_name, avatar, twitter, notes, \n          favorite, email, phone, job, active\n        ) VALUES (\n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", ", \n          ", "\n        )\n        ON CONFLICT (id) DO NOTHING\n      "])), contact.id, contact.first_name, contact.last_name, contact.avatar || null, contact.twitter || null, contact.notes || null, contact.favorite || false, contact.email || null, contact.phone || null, contact.job || null, (_a = contact.active) !== null && _a !== void 0 ? _a : true)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    console.log("Seeded ".concat(seedData.length, " contacts successfully!"));
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    console.error('Error seeding database:', error_1);
                    throw error_1;
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Run this function to seed your database
// You can call this from a script or from your app initialization
if (require.main === module) {
    seedDatabase()
        .then(function () {
        console.log('Seeding completed!');
        process.exit(0);
    })
        .catch(function (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    });
}
var templateObject_1, templateObject_2;
