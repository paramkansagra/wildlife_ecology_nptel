import { Question } from "@/types/Question";

export const questionsByWeek: { [week: string]: Question[] } = {
  week1: [
    {
      question: '"Enquiry into plants" is a book written by',
      options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
      answer: "Theophrastus",
    },
    {
      question: "In the Greek word root of Ecology, Oikos refers to",
      options: ["household", "preservation", "environment", "study"],
      answer: "household",
    },
    {
      question: "In the Greek word root of Ecology, logos refers to",
      options: ["household", "preservation", "environment", "study"],
      answer: "study",
    },
    {
      question:
        "Ecology is the scientific study of interactions among organisms and their_____. (fill in the blanks)",
      options: ["habitat", "niche", "environment", "population"],
      answer: "environment",
    },
    {
      question: "Who amongst these is considered the father of Biogeography?",
      options: ["Theophrastus", "Linnaeus", "Malthus", "Humboldt"],
      answer: "Humboldt",
    },
    {
      question: "Which of these is not a characteristics of fitness?",
      options: [
        "Fitness id environment- specific",
        "Fitness is species- specific",
        "Higher reproductive rate means higher fitness",
        "Fitness should be measured across several generations",
      ],
      answer: "Higher reproductive rate means higher fitness",
    },
    {
      question: "Which of these is not a kind of selection",
      options: ["directional", "stochastic", "disruptive", "stabilising"],
      answer: "stochastic",
    },
    {
      question:
        "Ecology is the scientific study of _______that determine the distribution and abundance of organisms. (Fill in the blanks)",
      options: ["statics", "interactions", "dynamics", "habitat"],
      answer: "interactions",
    },
    {
      question: "Which of these is not a characteristic of fitness?",
      options: [
        "Fitness is environment-specific.",
        "Fitness is species-specific.",
        "Fitness works on traits such as size and speed.",
        "Fitness should be measured across several generations.",
      ],
      answer: "Fitness works on traits such as size and speed.",
    },
    {
      question: "Which of these is not a step in natural selection?",
      options: [
        "variation",
        "underpopulation",
        "struggle for existence",
        "survival of the fittest",
      ],
      answer: "underpopulation",
    },
  ],
  week2: [
	{
		question: 'Hierarchy emerges almost inevitably through a wide variety of evolutionary processes, for the simple reason that hierarchical structures are _____ (fill in the blank)',
		options: [
			"perfect",
			"imperfect",
			"stable",
			"unstable",
		],
		answer: 'stable',
	},
	{
		question: 'the mitochondrion is a/an',
		options: [
			"sub-cellular organelle",
			"cell",
			"tissue",
			"organ",
		],
		answer: 'sub-cellular organelle',
	},
	{
		question: 'the laboratory approach to ecology uses',
		options: [
			"equations",
			"models",
			"observations",
			"experiments",
		],
		answer: 'experiments',
	},
	{
		question: '"the diversity that exists among different geographies" are',
		options: [
			"alpha biodiversity",
			"beta biodiversity",
			"gamma biodiversity",
			"delta biodiversity",
		],
		answer: 'gamma biodiversity',
	},
	{
		question: 'the hierarchical system was given by',
		options: [
			"simon",
			"watson",
			"hutchinson",
			"humboldt",
		],
		answer: 'simon',
	},
	{
		question: '"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such species" is a definition of',
		options: [
			"cells",
			"species",
			"ecosystems",
			"biomes",
		],
		answer: 'species',
	},
	{
		question: '"the diversity that exists within an ecosystem" is',
		options: [
			"alpha biodiversity",
			"beta biodiversity",
			"gamma biodiversity",
			"delta biodiversity",
		],
		answer: 'alpha biodiversity',
	},
	{
		question: 'the emergent principle can be stated as',
		options: [
			"whole = sum of parts",
			"whole < sum of parts",
			"whole > sum of parts",
			"none of these",
		],
		answer: 'whole > sum of parts',
	},
	{
		question: 'there is more biodiversity in areas with',
		options: [
			"less competition, less predation",
			"less competition, more predation",
			"more competition, more predation",
			"more competition, less predation",
		],
		answer: 'more competition, more predation',
	},
	{
		question: 'for more biodiversity, the level of disturbance should be',
		options: [
			"less",
			"intermediate",
			"more",
			"none of these",
		],
		answer: 'intermediate',
	},
  ],
  week3: [
	{
		question: "birds on giraffe are an example of",
		options: [
			"colony",
			"commensalism",
			"protocooperation",
			"allelopathy",
		],
		answer: 'protocooperation',
	},
	{
		question: "egrets with buffaloes are an example of",
		options: [
			"colony",
			"commensalism",
			"protocooperation",
			"allelopathy",
		],
		answer: 'commensalism',
	},
	{
		question: "the scientific study of animal behaviour is called",
		options: [
			"behaviourism",
			"ecology",
			"ethology",
			"prey- predator dynamics",
		],
		answer: 'ethology',
	},
	{
		question: "the interaction between exotic shrubs and trees through the action of seed predators is an example of",
		options: [
			"infraspecific competition",
			"apparent competition",
			"disguised competition",
			"harmonious competition",
		],
		answer: 'apparent competition',
	},
	{
		question: "harmonious competition occur where",
		options: [
			"at least one participant is benefited",
			"at least one participant is unharmed",
			"both participants are benefited",
			"both participants are unharmed",
		],
		answer: 'both participants are unharmed',
	},
	{
		question: "Hamilton's rule can be stated as",
		options: [
			"rB < C",
			"rB > C",
			"rB = C",
			"rB + C = 0",
		],
		answer: 'rB > C',
	},
	{
		question: "trampling of grass due to the movement of animals is an example of",
		options: [
			"mutualism",
			"ammensalism",
			"commensalism",
			"protocooperation",
		],
		answer: 'ammensalism',
	},
	{
		question: "i observe a monkey take a tick out of another monkey's head and ear it. In the social context, this behaviour would be called",
		options: [
			"tick hunting",
			"auto grooming",
			"allo grooming",
			"foraging",
		],
		answer: 'allo grooming',
	},
	{
		question: "an inventory of behaviours exhibited by an animal during a behaviour exercise is called",
		options: [
			"ecogram",
			"ethogram",
			"behaviourogram",
			"animalogram",
		],
		answer: 'ethogram',
	},
	{
		question: "i observe a bird take a tick out of another bird's head and eat it. in the social context, this behaviour would be called",
		options: [
			"tick hunting",
			"auto grooming",
			"allo grooming",
			"foraging",
		],
		answer: 'allo grooming',
	},
  ],
  week4: [
	{
		question: "consider the food chain grass --> grasshopper --> frog --> snake --> hawk as we move up the food chain,",
		options: [
			"available energy decreases",
			"available energy increases",
			"available energy remains same",
			"available energy is zero everywhere",
		],
		answer: 'available energy decreases',
	},
	{
		question: "consider the food chain grass --> grasshopper --> frog --> snake --> hawk in the food chain",
		options: [
			"hawk is producer",
			"hawk is consumer and carnivore",
			"hawk is consumer and herbivore",
			"hawk is decomposer",
		],
		answer: 'hawk is consumer and carnivore',
	},
	{
		question: "trees --> birds --> parasites --> hyperparasites represent",
		options: [
			"upright pyramid of numbers",
			"inverted pyramid of numbers",
			"spindle pyramid of numbers",
			"dumb-bell pyramid of numbers",
		],
		answer: 'inverted pyramid of numbers',
	},
	{
		question: "consider the food chain grass --> grasshopper --> frog --> snake --> hawk in this food chain",
		options: [
			"frog is producer",
			"frog is consumer and carnivore",
			"frog is consumer and herbivore",
			"frog is decomposer",
		],
		answer: 'frog is consumer and carnivore',
	},
	{
		question: "at the compensation point",
		options: [
			"photosynthesis = respiration",
			"photosynthesis < respiration",
			"photosynthesis > respiration",
			"photosynthesis = 0",
		],
		answer: 'photosynthesis = respiration',
	},
	{
		question: "tree --> frugivorous birds --> hawk represents",
		options: [
			"upright pyramid of numbers",
			"inverted pyramid of numbers",
			"spindle pyramid of numbers",
			"dumb-bell pyramid of numbers",
		],
		answer: 'spindle pyramid of numbers',
	},
	{
		question: "glacial lakes are typical examples of",
		options: [
			"eutrophic lakes",
			"hypereutrophic lakes",
			"oligotrophic lakes",
			"mesotrophic lakes",
		],
		answer: 'oligotrophic lakes',
	},
	{
		question: "consider the food chain grass --> grasshopper --> frog --> snake -->hawk in this food chain",
		options: [
			"more numbers of hawks than grasshoppers can be supported",
			"more numbers of grasshoppers than hawks can be supported",
			"equal numbers of hawks and grasshoppers can be supported",
			"non of these",
		],
		answer: 'more numbers of grasshoppers than hawks can be supported',
	},
	{
		question: "if we all become vegetarians, we'll be able to support our large populations. this can be explained through",
		options: [
			"10% rule",
			"1% rule",
			"trophic cascades",
			"biodiversity",
		],
		answer: '10% rule',
	},
	{
		question: "net primary productivity is given by",
		options: [
			"APAR x LUE",
			"APAR + LUE",
			"APAR - LUE",
			"APAR / LUE",
		],
		answer: 'APAR x LUE',
	},
  ],
  week5:[
	{
		question: "____ is how close the measured values are to the correct value",
		options: [
			"accuracy",
			"precision",
			"bias",
			"variance",
		],
		answer: 'accuracy',
	},
	{
		question: "which of these us not a measure of absolute population density?",
		options: [
			"total count",
			"pelt count",
			"capture- recapture method",
			"removal method",
		],
		answer: 'pelt count',
	},
	{
		question: "the logistic growth equation, when plotted, appears",
		options: [
			"I shaped",
			"J shaped",
			"S shaped",
			"O shaped",
		],
		answer: 'S shaped',
	},
	{
		question: "______ employs a simple rule of selecting every kth unit starting with a number chosen at random from 1 to k as the random start",
		options: [
			"simple random sampling",
			"systematic sampling",
			"stratifies sampling",
			"multistage sampling",
		],
		answer: 'systematic sampling',
	},
	{
		question: "the juvenile mortality rate is the annual number of death of juveniles per",
		options: [
			"100 births",
			"1000 births",
			"100 live births",
			"1000 live births",
		],
		answer: '1000 live births',
	},
	{
		question: "the minimum replacement level fertility for a population to grow should be greater than",
		options: [
			"1",
			"2",
			"3",
			"4",
		],
		answer: '2',
	},
	{
		question: "pan traps are used for sampling",
		options: [
			"bees",
			"butterflies",
			"non- pollinator insects",
			"pollinator insects",
		],
		answer: 'pollinator insects',
	},
	{
		question: "which of these is true",
		options: [
			"physiological longevity > ecological longevity",
			"physiological longevity = ecological longevity",
			"physiological longevity < ecological longevity",
			"a or b",
		],
		answer: 'a or b',
	},
	{
		question: "a sampling procedure such that each possible combination of sampling units out of the population has the same chance of being selected is referred to as",
		options: [
			"simple random sampling",
			"systematic sampling",
			"stratified sampling",
			"multistage sampling",
		],
		answer: 'simple random sampling',
	},
	{
		question: "cover board surveys are typically used for sampling",
		options: [
			"herpetofauna",
			"fishes",
			"large mammals",
			"carnivores",
		],
		answer: 'herpetofauna',
	},
  ],
  week6:[
	{
		question: "a climax caused by wildfires is an example of",
		options: [
			"climatic climax",
			"edaphic climax",
			"disclimax",
			"catastrophic climax",
		],
		answer: 'catastrophic climax',
	},
	{
		question: "when compared to generalist species, specialist species have",
		options: [
			"narrower niches",
			" broader niches",
			"same-size niches",
			"none of these",
		],
		answer: 'narrower niches',
	},
	{
		question: "which of these depicts correctly the lithosere primary succession",
		options: [
			"rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
			"rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
			"moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
			"rock --> crustose lichen --> foliose lichen --> shrub --> herbaceous stage --> moss --> woodland --> climax",
		],
		answer: 'rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax',
	},
	{
		question: "importance value can be written as",
		options: [
			"relative density + relative frequency X relative dominance",
			"relative density X relative frequency + relative dominance",
			"relative density + relative frequency + relative dominance",
			"relative density X relative frequency X relative dominance",
		],
		answer: 'relative density + relative frequency + relative dominance',
	},
	{
		question: "lithosere is an example of",
		options: [
			"hydrosere",
			"xerosere",
			"psammosere",
			"halosere",
		],
		answer: 'xerosere',
	},
	{
		question: "importance value varies from",
		options: [
			"0 to 10",
			"0 to 50",
			"0 to 100",
			"0 to 300",
		],
		answer: '0 to 300',
	},
	{
		question: "a species found most frequently in a particular community, but also present occasionally in others is called",
		options: [
			"accidental species",
			"indifferent species",
			"selective species",
			"exclusive species",
		],
		answer: 'selective species',
	},
	{
		question: "the climax near Tindi village is being controlled by disturbance by cattle. this is an example of",
		options: [
			"climatic climax",
			"edaphic climax",
			"disclimax",
			"catastrophic climax",
		],
		answer: 'disclimax',
	},
	{
		question: "which of these is correct?",
		options: [
			"fundamental niche > realised niche",
			"fundamental niche = realised niche",
			"fundamental niche < realised niche",
			"fundamental niche > realised niche or fundamental niche = realised niche",
		],
		answer: 'fundamental niche > realised niche or fundamental niche = realised niche',
	},
	{
		question: "which of these is not a characteristic of pioneer species",
		options: [
			"ability to grow on bare rocks",
			"ability to tolerate extreme temperatures",
			"large size",
			"short life span",
		],
		answer: 'large size',
	},
  ],
};
