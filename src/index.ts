import { Validation } from './validation';

export { Validation } from './validation';
export { FieldValidation } from './model/field.model';
 
 
 var schema = {
    "isActive" : true,
    "blocks" : [ 
        {
            "name" : "Block title",
            "title" : "Mini App 1",
            "instructionForUser" : {
                "instructionType" : 1
            },
            "sections" : [ 
                {
                    "title" : "Section 1",
                    "name" : "",
                    "layout" : 100,
                    "isMaster" : false,
                    "isActive" : true,
                    "category" : [],
                    "instructionForUser" : {
                        "instructionType" : 1
                    },
                    "fields" : [ 
                        {
                            "autoCalculated" : {},
                            "default" : {
                                "enabled" : true,
                                "type" : ""
                            },
                            "instructionForUser" : {
                                "instructionType" : 1
                            },
                            "type" : {
                                "name" : "text",
                                "title" : "TextBox",
                                "metadata" : {}
                            },
                            "validation" : {
                                "required" : {
                                    "enabled" : false
                                },
                                "condition" : {
                                    "enabled" : false
                                },
                                "mask" : {
                                    "enabled" : false
                                },
                                "pattern" : {
                                    "enabled" : false
                                },
                                "validationSet" : {
                                    "enabled" : false
                                }
                            },
                            "isActive" : true,
                            "indexNo" : 0,
                            "uid" : "1545820747843",
                            "isEncrypted" : false,
                            "encrypted" : false,
                            "unique" : false,
                            "disabled" : false,
                            "key" : false,
                            "linked" : {},
                            "optional" : false,
                            "setRule" : {},
                            "title" : "fdfsd"
                        }, 
                        {
                            "autoCalculated" : {},
                            "default" : {
                                "enabled" : true,
                                "type" : ""
                            },
                            "instructionForUser" : {
                                "instructionType" : 1
                            },
                            "type" : {
                                "name" : "number",
                                "title" : "TextBox",
                                "metadata" : {}
                            },
                            "validation" : {
                                "required" : {
                                    "enabled" : false
                                },
                                "condition" : {
                                    "enabled" : false
                                },
                                "mask" : {
                                    "enabled" : false
                                },
                                "pattern" : {
                                    "enabled" : false
                                },
                                "validationSet" : {
                                    "enabled" : false
                                }
                            },
                            "isActive" : true,
                            "indexNo" : 1,
                            "uid" : "1545821026136",
                            "title" : "fdsf",
                            "isEncrypted" : false,
                            "encrypted" : false,
                            "unique" : false,
                            "disabled" : false,
                            "key" : false,
                            "linked" : {},
                            "optional" : false,
                            "setRule" : {}
                        }
                    ],
                    "indexNo" : 0,
                    "uid" : "1545820747845",
                    "parentId" : [],
                    "rules" : [ 
                        {
                            "action" : "launchSection",
                            "sections" : [ 
                                {
                                    "indexNo" : 0,
                                    "uid" : "1545303125751",
                                    "rules" : [],
                                    "parentId" : "1545820747845",
                                    "name" : "Vanom",
                                    "_id" : "5c1b745b0cd7646ffc7a0d99",
                                    "title" : "Vanom"
                                }
                            ],
                            "conditions" : [ 
                                {
                                    "bool" : "and",
                                    "condition" : "",
                                    "leftOperand" : "1545820747846-1545820747845-1545821026136",
                                    "comparison" : "gte",
                                    "rightOperand" : "5655464"
                                }, 
                                {
                                    "bool" : "and",
                                    "condition" : "",
                                    "leftOperand" : "1545820747846-1545820747845-1545820747843",
                                    "comparison" : "contains",
                                    "rightOperand" : "rrewrerwerw"
                                }, 
                                {
                                    "bool" : "or",
                                    "condition" : "",
                                    "leftOperand" : "1545820747846-1545820747845-1545821026136",
                                    "comparison" : "notEqual",
                                    "rightOperand" : "45655"
                                }
                            ]
                        }
                    ],
                    "isLaunchSection" : false
                }, 
                {
                    "title" : "Vanom",
                    "name" : "Vanom",
                    "layout" : 100,
                    "isMaster" : false,
                    "isActive" : true,
                    "category" : [],
                    "instructionForUser" : {
                        "instructionType" : 1
                    },
                    "fields" : [ 
                        {
                            "autoCalculated" : {},
                            "default" : {
                                "enabled" : true,
                                "type" : ""
                            },
                            "instructionForUser" : {
                                "instructionType" : 1
                            },
                            "type" : {
                                "name" : "text",
                                "title" : "TextBox",
                                "metadata" : {}
                            },
                            "validation" : {
                                "required" : {
                                    "enabled" : false
                                },
                                "condition" : {
                                    "enabled" : false
                                },
                                "mask" : {
                                    "enabled" : false
                                },
                                "pattern" : {
                                    "enabled" : false
                                },
                                "validationSet" : {
                                    "enabled" : false
                                }
                            },
                            "isActive" : true,
                            "indexNo" : 0,
                            "uid" : "1545303125750",
                            "title" : "Vanom",
                            "isEncrypted" : false,
                            "optional" : false,
                            "encrypted" : false,
                            "unique" : false,
                            "disabled" : false,
                            "key" : false,
                            "linked" : {},
                            "setRule" : {}
                        }
                    ],
                    "indexNo" : 1,
                    "uid" : "1545303125751",
                    "parentId" : "1545820747845",
                    "rules" : [],
                    "isLaunchSection" : true
                }
            ],
            "indexNo" : 0,
            "uid" : "1545820747846"
        }
    ],
    "instructionForUser" : {
        "instructionType" : 1
    },
    "title" : "new pproch app details velidatio",
    "isDeleted" : false,
    "isCurrent" : true,
    "client" : "perfeqta4", 
    "version" : 2
} 

var rule = [
    {
      "bool": "and",
      "condition": "",
      "leftOperand": "1545820747846-1545820747845-1545821026136",
      "comparison": "gte",
      "rightOperand": "5655464"
    },
    {
      "bool": "and",
      "condition": "",
      "leftOperand": "1545820747846-1545820747845-1545820747843",
      "comparison": "contains",
      "rightOperand": "rrewrerwerw"
    },
    {
      "bool": "or",
      "condition": "",
      "leftOperand": "1545820747846-1545820747845-1545821026136",
      "comparison": "notEqual",
      "rightOperand": "45655"
    }
  ]

  var entry = {
      "1545821026136":"5655464",
      "1545820747843":"rrewrerwerw"
  }

console.log(Validation.sectionExcutionValidation(rule,schema,entry))
// export const Greeter = (name: string) => `Hello ${name}`;
