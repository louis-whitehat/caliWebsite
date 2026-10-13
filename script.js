const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const filterButtons = document.querySelectorAll('.exercise');
const movementCards = document.querySelectorAll('.movement-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    movementCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.style.display = matches ? 'block' : 'none';
    });
  });
});

const skillSearchInput = document.getElementById('skill-search-input');
const skillSearchEmpty = document.getElementById('skill-search-empty');

window.additionalSkills = [
  {
    category: 'Strength basics and variations',
    name: 'Chin-Up',
    description: 'A palms-toward-you pull-up variation that emphasizes the biceps and upper back.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Strength basics and variations',
    name: 'Inverted Row',
    description: 'A horizontal bodyweight row that builds pulling strength and scapular control.',
    difficulty: 'Easiest',
    badge: 'easiest'
  },
  {
    category: 'Strength basics and variations',
    name: 'Ring Row',
    description: 'A scalable horizontal pull performed on rings, with extra shoulder stability demand.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Strength basics and variations',
    name: 'Archer Pull-Up',
    description: 'A wide pull-up that shifts most of the load to one arm while the other assists.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Typewriter Pull-Up',
    description: 'A pull-up variation that moves laterally across the bar at the top of each rep.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Chest-to-Bar Pull-Up',
    description: 'A high pull-up that brings the chest to the bar using stronger, faster pulling.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Explosive Pull-Up',
    description: 'A powerful pull-up focused on accelerating the body upward with strict control.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Archer Push-Up',
    description: 'A wide push-up that loads one arm more heavily while the other arm assists.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Diamond Push-Up',
    description: 'A close-hand push-up variation that places additional emphasis on the triceps.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Strength basics and variations',
    name: 'Decline Push-Up',
    description: 'A push-up with the feet elevated to increase the load on the upper body.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Strength basics and variations',
    name: 'Pike Push-Up',
    description: 'An angled pressing exercise that develops the shoulder strength needed for handstands.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Strength basics and variations',
    name: 'Deficit Push-Up',
    description: 'A deeper-range push-up performed with the hands raised on stable handles or blocks.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Ring Push-Up',
    description: 'A push-up on rings that challenges balance and shoulder stability throughout the rep.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'One-Arm Push-Up',
    description: 'A unilateral push-up requiring full-body bracing and pressing strength on one arm.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Clapping Push-Up',
    description: 'An explosive push-up where the hands leave the floor briefly between repetitions.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Pistol Squat',
    description: 'A single-leg squat through a deep range while keeping the other leg extended.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Shrimp Squat',
    description: 'A single-leg squat variation with the non-working leg bent behind the body.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Nordic Hamstring Curl',
    description: 'A demanding eccentric hamstring exercise performed by lowering from a kneeling position.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Hanging Leg Raise',
    description: 'Raise the legs from a dead hang while maintaining shoulder and trunk control.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Toes-to-Bar',
    description: 'A hanging core movement that brings the toes to the bar with controlled body tension.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Weighted Pull-Up',
    description: 'A strict pull-up performed with added load to build maximal pulling strength.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Weighted Dip',
    description: 'A dip performed with added resistance while maintaining a stable shoulder position.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Straight-Bar Dip',
    description: 'A dip over a straight bar that builds pressing strength and transition control.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Strength basics and variations',
    name: 'Ring Muscle-Up',
    description: 'A muscle-up on rings that combines a false-grip pull, transition, and stable dip.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'Strict Muscle-Up',
    description: 'A muscle-up completed without a kip, relying on controlled pulling and pressing strength.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Strength basics and variations',
    name: 'False-Grip Muscle-Up',
    description: 'A ring muscle-up using a false grip to make the transition above the rings more direct.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Tuck Planche',
    description: 'A planche progression with knees tucked close to the chest and the body supported on straight arms.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Advanced Tuck Planche',
    description: 'A longer-lever tuck planche that increases shoulder and core demands.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Straddle Planche',
    description: 'A planche variation with legs apart to shorten the lever while maintaining a horizontal body line.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Bent-Arm Planche',
    description: 'A planche variation held with bent elbows, requiring strong shoulder and wrist control.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Tuck Front Lever',
    description: 'A front-lever progression with knees tucked to reduce the leverage demand.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Static holds and progressions',
    name: 'Advanced Tuck Front Lever',
    description: 'A front-lever progression with the hips more open and the back closer to horizontal.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'One-Leg Front Lever',
    description: 'A front-lever variation with one leg extended to develop a longer body lever.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Straddle Front Lever',
    description: 'A front lever with the legs straddled to manage leverage while practicing a straight body line.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Tuck Back Lever',
    description: 'A back-lever progression with knees tucked and shoulders carefully extended.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Static holds and progressions',
    name: 'Straddle Back Lever',
    description: 'A back-lever variation with legs apart to shorten the lever while keeping the body level.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Tuck Human Flag',
    description: 'A human-flag progression with knees tucked to reduce the lateral leverage.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Static holds and progressions',
    name: 'Straddle Human Flag',
    description: 'A human-flag variation with legs apart to build toward a longer horizontal body line.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Elbow Lever',
    description: 'A horizontal balance supported by the hands, with the elbows braced against the torso.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Static holds and progressions',
    name: 'L-Sit',
    description: 'A support hold with straight legs raised in front to form an L shape.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Static holds and progressions',
    name: 'V-Sit',
    description: 'An advanced compression hold with straight legs raised above hip height.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Static holds and progressions',
    name: 'Manna',
    description: 'An advanced straight-arm support strength hold with the legs lifted high behind the body.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Static holds and progressions',
    name: 'Iron Cross',
    description: 'A straight-arm ring strength hold with the arms extended out to the sides.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Static holds and progressions',
    name: 'Maltese',
    description: 'A straight-arm horizontal hold with the arms wide and the body held parallel to the floor.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Static holds and progressions',
    name: 'Victorian Cross',
    description: 'An elite straight-arm ring hold with the body horizontal below the rings.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Static holds and progressions',
    name: 'Ring Support Hold',
    description: 'A stable straight-arm hold above the rings that develops foundational ring control.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Static holds and progressions',
    name: 'Skin the Cat',
    description: 'A controlled shoulder mobility and strength movement rotating through a hanging inverted position.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Skill variations',
    name: 'Wall Handstand',
    description: 'A handstand practiced with wall support to develop alignment and shoulder endurance.',
    difficulty: 'Easy',
    badge: 'easy'
  },
  {
    category: 'Skill variations',
    name: 'Handstand Walk',
    description: 'Travel forward or sideways while balancing on the hands in a handstand.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill variations',
    name: 'Deficit Handstand Push-Up',
    description: 'A handstand push-up using stable handles to increase the range of motion.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill variations',
    name: 'Freestanding Handstand Push-Up',
    description: 'A strict overhead push-up performed while balancing without wall support.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill variations',
    name: 'Ring Dip to Support',
    description: 'Press from the bottom of a ring dip to a steady straight-arm support.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Skill variations',
    name: 'Russian Dip',
    description: 'A deep dip variation that rolls the shoulders over the bar to train the muscle-up transition.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill variations',
    name: 'Korean Dip',
    description: 'A straight-bar dip performed behind the body that challenges shoulder extension and control.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill variations',
    name: 'Hefesto',
    description: 'A demanding back-lever pull to a support position that requires careful shoulder preparation.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill variations',
    name: 'Front Lever Raise',
    description: 'Raise the body into a front lever with a controlled path and no swing.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill variations',
    name: 'Back Lever Raise',
    description: 'Lift into a back lever under control while maintaining a safe shoulder position.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill variations',
    name: '180 Pull-Up',
    description: 'An explosive bar movement with a half-turn before returning to a controlled hang.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill variations',
    name: 'Tuck Dragon Flag',
    description: 'A dragon-flag progression performed with bent knees to scale the core demand.',
    difficulty: 'Medium',
    badge: 'medium'
  },
  {
    category: 'Skill variations',
    name: 'Straddle Dragon Flag',
    description: 'A dragon-flag progression with legs apart to reduce the leverage of a straight-leg hold.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill variations',
    name: 'Ring Front Lever',
    description: 'A front lever performed on rings, adding instability to the horizontal pulling hold.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill variations',
    name: 'Ring Back Lever',
    description: 'A back lever performed on rings, demanding controlled shoulder positioning and stability.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill variations',
    name: 'One-Arm Handstand',
    description: 'Balance upside down on one hand, requiring exceptional alignment and fingertip control.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Front Lever to Muscle-Up',
    description: 'Transition from a front lever into a muscle-up while maintaining deliberate control.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Muscle-Up to Front Lever',
    description: 'Finish a muscle-up by lowering into a clean front lever hold.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Back Lever to Muscle-Up',
    description: 'Link a back-lever position into a controlled pull and transition above the bar.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'L-Sit to Tuck Planche',
    description: 'Shift from an L-sit into a tucked planche without setting the feet down.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'L-Sit to V-Sit',
    description: 'Raise the legs from an L-sit into a V-sit through active compression.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Straddle Press to Handstand',
    description: 'Press from a wide straddle position into a balanced handstand without kicking.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Handstand to Elbow Lever',
    description: 'Lower from a handstand and transition into a steady elbow lever.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Planche to Front Lever',
    description: 'Connect a planche and front-lever position in a controlled strength sequence.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Front Lever to Back Lever',
    description: 'Rotate between front- and back-lever positions while maintaining a straight body line.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: '180 Muscle-Up',
    description: 'Perform a half-turn during a dynamic muscle-up and finish in a stable support.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: '540 Muscle-Up',
    description: 'A high-level bar rotation sequence with a one-and-a-half turn into a muscle-up support.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Muscle-Up to 360',
    description: 'Link a muscle-up support to a full controlled rotation around the bar.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Handstand Push-Up to Planche',
    description: 'Combine a handstand press with a controlled transition into a planche position.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Dip to Handstand',
    description: 'Press from a support position into a handstand, combining pressing strength and balance.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Pull-Up to Front Lever',
    description: 'Finish a strict pull-up by extending into a horizontal front-lever hold.',
    difficulty: 'Very Hard',
    badge: 'very-hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Muscle-Up to Straight-Bar Dip',
    description: 'Complete a muscle-up transition and continue into a controlled straight-bar dip.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Handstand to L-Sit',
    description: 'Lower from a handstand into an L-sit support with a smooth, controlled transition.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'L-Sit to Planche',
    description: 'Press directly from an L-sit into a planche position using straight-arm strength.',
    difficulty: 'Hardest',
    badge: 'hardest'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Handstand Push-Up to Handstand',
    description: 'Perform a strict handstand push-up and return to a balanced handstand position.',
    difficulty: 'Hard',
    badge: 'hard'
  },
  {
    category: 'Skill combinations and flows',
    name: 'Human Flag to Front Lever',
    description: 'Transition between a lateral human-flag hold and a horizontal front lever.',
    difficulty: 'Hardest',
    badge: 'hardest'
  }
];

const skillCatalog = document.getElementById('skill-catalog');
if (skillCatalog) {
  const skillsByCategory = window.additionalSkills.reduce((categories, skill) => {
    if (!categories.has(skill.category)) {
      categories.set(skill.category, []);
    }
    categories.get(skill.category).push(skill);
    return categories;
  }, new Map());

  skillsByCategory.forEach((skills, category) => {
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const count = document.createElement('span');
    const list = document.createElement('div');

    section.className = 'skill-combos skill-search-section';
    if (category === 'Skill combinations and flows') {
      section.dataset.comboGroup = 'true';
    }
    heading.textContent = category;
    count.className = 'skill-count';
    count.textContent = String(skills.length);
    count.setAttribute('aria-label', `${skills.length} skills`);
    heading.append(count);
    list.className = 'skills-list';
    section.append(heading, list);

    skills.forEach((skill, index) => {
      const slug = skill.name
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      const link = document.createElement('a');
      const article = document.createElement('article');
      const mark = document.createElement('div');
      const info = document.createElement('div');
      const name = document.createElement('h3');
      const description = document.createElement('p');
      const level = document.createElement('div');

      link.className = 'skill-rank-link';
      link.href = `skill-detail.html?skill=${encodeURIComponent(slug)}`;
      article.className = 'skill-rank';
      mark.className = 'rank-number';
      mark.textContent = String(index + 1);
      mark.setAttribute('aria-hidden', 'true');
      info.className = 'skill-info';
      name.textContent = skill.name;
      description.textContent = skill.description;
      level.className = `skill-level ${skill.badge}`;
      level.textContent = skill.difficulty;

      info.append(name, description);
      article.append(mark, info, level);
      link.append(article);
      list.append(link);
    });

    skillCatalog.append(section);
  });
}

const difficultyRanks = {
  hardest: 6,
  'very-hard': 5,
  hard: 4,
  medium: 3,
  easy: 2,
  easiest: 1
};
const getSkillDifficulty = (link) => {
  const level = link.querySelector('.skill-level');
  if (!level) {
    return 0;
  }

  return Object.entries(difficultyRanks).find(([className]) => level.classList.contains(className))?.[1] ?? 0;
};

document.querySelectorAll('.skills-list').forEach((list) => {
  const links = Array.from(list.children)
    .filter((child) => child.matches('.skill-rank-link'))
    .map((link, index) => ({ link, index }))
    .sort((first, second) => (
      getSkillDifficulty(second.link) - getSkillDifficulty(first.link) || first.index - second.index
    ));

  links.forEach(({ link }, index) => {
    const rank = link.querySelector('.rank-number');
    if (rank && list.closest('#skill-combos-section')) {
      rank.textContent = `C${index + 1}`;
    } else if (rank && list.closest('#skill-catalog')) {
      rank.textContent = String(index + 1);
    } else if (rank && list.id === 'skill-list') {
      rank.textContent = `#${index + 1}`;
    }
    list.append(link);
  });
});

if (skillCatalog) {
  const categories = Array.from(skillCatalog.children);
  categories
    .map((section, index) => ({
      section,
      index,
      difficulty: Math.max(
        ...Array.from(section.querySelectorAll('.skill-rank-link'), getSkillDifficulty),
        0
      )
    }))
    .sort((first, second) => second.difficulty - first.difficulty || first.index - second.index)
    .forEach(({ section }) => skillCatalog.append(section));
}

const skillCount = document.getElementById('skill-count');
const skillList = document.getElementById('skill-list');
if (skillCount && skillList) {
  const count = skillList.querySelectorAll('.skill-rank-link').length;
  skillCount.textContent = String(count);
  skillCount.setAttribute('aria-label', `${count} skills`);
}

const skillComboCount = document.getElementById('skill-combo-count');
if (skillComboCount) {
  skillComboCount.textContent = String(
    document.querySelectorAll(
      '#skill-combos-section .skill-rank-link, #skill-catalog [data-combo-group] .skill-rank-link'
    ).length
  );
}

const skillLinks = document.querySelectorAll('.skill-rank-link');
const skillTotalCount = document.getElementById('skill-total-count');
if (skillTotalCount) {
  skillTotalCount.textContent = String(skillLinks.length);
}

if (skillSearchInput && skillSearchEmpty) {
  skillSearchInput.addEventListener('input', () => {
    const searchTerm = skillSearchInput.value.trim().toLocaleLowerCase();
    let visibleSkills = 0;

    skillLinks.forEach((link) => {
      const skillName = link.querySelector('.skill-info h3')?.textContent?.toLocaleLowerCase() ?? '';
      const matches = skillName.includes(searchTerm);

      link.hidden = !matches;
      if (matches) {
        visibleSkills += 1;
      }
    });

    document.querySelectorAll('.skill-search-section').forEach((section) => {
      section.hidden = !section.querySelector('.skill-rank-link:not([hidden])');
    });

    skillSearchEmpty.hidden = visibleSkills > 0;
  });
}
