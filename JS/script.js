// general variables
const button = document.querySelector(".message-button");
const box = document.querySelector(".box");
const quote = document.querySelector(".quote");
let messages = [];

// defining arrays depending on the page

if (document.querySelector("#multi-hero")) {
    messages = [
        "The mind once enlightened cannot again become dark. – Thomas Paine",
        "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
        "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. – Stephen Hawking",
        "When the student is ready, the teacher will appear. – Lao Tzu",
        "Learning never exhausts the mind. – Leonardo da Vinci",
        "It always seems impossible until it’s done. – Nelson Mandela",
        "The expert in anything was once a beginner. – Helen Hayes",
        "Believe you can and you’re halfway there. – Theodore Roosevelt",
        "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "The difference between ordinary and extraordinary is that little extra. – Jimmy Johnson",
        "The struggle itself toward the heights is enough to fill a man’s heart. – Albert Camus",
        "Leadership and learning are indispensable to each other. – John F. Kennedy",
        "Learn everything you can, anytime you can, from anyone you can. – Sarah Caldwell",
        "The roots of education are bitter, but the fruit is sweet. – Aristotle",
        "Once you stop learning, you start dying. – Albert Einstein",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
        "The only impossible journey is the one you never begin. – Tony Robbins",
        "The secret of getting ahead is getting started. – Mark Twain",
        "Old words are reborn with new faces. ― Criss Jami, Killosophy",
        "A Learning Mind In Motion Stays In Motion - James Hauenstein",
        "Many ordinary and extraordinary people have made fantastic changes in their lives by keeping themselves open to learning. - Barbara Oakley, Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential",
        "Studying in whatever form keeps the reader aware, and staying aware is knowledge, which leads to a beautiful career and a happier life. - Ehsan Sehgal",
        "Study like professionals, not like patients. - Kukil Gogoi",
        "There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning. — Jiddu Krishnamurti",
        "I am always ready to learn although I do not always like being taught. — Winston Churchill",
        "Develop a passion for learning. If you do, you will never cease to grow. — Anthony J. D’Angelo",
        "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young. — Henry Ford",
        "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible. — Richard Feynman",
        "The beautiful thing about learning is nobody can take it away from you. — B.B. King",
        "Being a student is easy. Learning requires actual work. — William Crawford",
        "If you think education is expensive, try estimating the cost of ignorance. — Howard Gardner",
        "Study without desire spoils the memory, and it retains nothing that it takes in. — Leonardo da Vinci",
        "I am still learning. — Michelangelo (age 87)",
        "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. — Alvin Toffler",
        "He who learns but does not think, is lost! He who thinks but does not learn is in great danger. — Confucius",
        "The whole purpose of education is to turn mirrors into windows. — Sydney J. Harris",
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. — Malcolm X",
        "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. — Dr. Seuss",
        "Learning is not attained by chance. It must be sought for with ardour and attended with diligence.” — Abigail Adams"
    ]
}

else if (document.querySelector("#health-hero")) {
    messages = [
        "No profit grows where is no pleasure ta'en. In brief, sir, study what you most affect. - William Shakespeare, The Taming of the Shrew",
        "Who’s to say what a ‘literary life’ is? As long as you are writing often, and writing well, you don’t need to be hanging-out in libraries all the time. - Roman Payne, Cities & Countries",
        "Nightclubs are great literary research centers. So is Ibiza! - Roman Payne, Cities & Countries",
        "Studying is always future best investment. Don’t just study to qualify, but also Study to edify, elevate and to amplify your life. - De philosopher DJ Kyos",
        "He who laughs most, learns best. — John Cleese",
        "If you don't like the road you're walking, start paving another one. —Dolly Parton",
        "And now that you don’t have to be perfect, you can be good. —John Steinbeck, East of Eden",
        "To love oneself is the beginning of a lifelong romance. —Oscar Wilde",
        "Of all the judgments we pass in life, none is more important than the judgment we pass on ourselves. —Nathaniel Branden",
        "If you don’t love yourself, nobody will. Not only that, you won’t be good at loving anyone else. Loving starts with the self. —Wayne Dyer",
        "Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment. —Stephen Covey",
        "Do something nice for yourself today. Find some quiet, sit in stillness, breathe. Put your problems on pause. You deserve a break. ―Akiroq Brost",
        "Have patience with all things. But, first of all with yourself. ―Francis de Sales",
        "Self-care is not a waste of time. Self-care makes your use of time more sustainable. —Jackie Viramontez",
        "Love yourself enough to set boundaries. Your time and energy are precious. You get to choose how you use it. You teach people how to treat you by deciding what you will and won't accept. —Anna Taylor",
        "You cannot serve from an empty vessel. —Eleanor Brownn",
        "Until you value yourself, you won’t value your time. Until you value your time, you will not do anything with it. —M. Scott Peck",
        "Just when you feel you have no time to relax, know that this is the moment you most need to make time to relax. ―Matt Haig",
        "Those who think they have not time for bodily exercise will sooner or later have to find time for illness. —Edward Stanley",
        "Everybody is different, and every body is different. —Beverly Diehl",
        "Almost everything will work again if you unplug it for a few minutes, including you. —Anne Lamott",
        "As important as it is to have a plan for doing work, it is perhaps more important to have a plan for rest, relaxation, self-care, and sleep. ―Akiroq Brost",
        "When we self-regulate well, we are better able to control the trajectory of our emotional lives and resulting actions based on our values and sense of purpose. – Amy Mercree",
        "When you say ‘yes’ to others make sure you are not saying ‘no’ to yourself. – Paolo Coehlo",
        "Don’t sacrifice yourself too much, because if you sacrifice too much there’s nothing else you can give and nobody will care for you. – Karl Lagerfeld",
        "If your compassion does not include yourself, it is incomplete. – Jack Kornfield",
        "You are a VIP, a very important person. So take care with self-care. If not you, who? If not now, when? – Toni Hawkins",
        "One of the best ways you can fight discrimination is by taking good care of yourself. Your survival is not just important; it’s an act of revolution. – DaShanne Stokes",
        "Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort. – Deborah Day",
    ]
}

else if (document.querySelector("#sad-hero")) {
    messages = [
        "Anyone who has never made a mistake has never tried anything new. – Albert Einstein",
        "Don’t let what you cannot do interfere with what you can do. – John Wooden",
        "The best way to take care of the future is to take care of the present moment. – Thich Nhat Hanh",
        "You cannot always control what goes on outside. But you can always control what goes on inside. —Wayne Dyer",
        "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight. —Benjamin Franklin",
        "Stop a minute, right where you are. Relax your shoulders, shake your head and spine like a dog shaking off cold water. Tell that imperious voice in your head to be still. —Barbara Kingsolver",
        "Life isn’t as serious as the mind makes it out to be. —Eckhart Tolle",
        "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop. —Mother Teresa",
        "You are the sky. Everything else – it’s just the weather. —Pema Chödrön",
        "Nothing is permanent in this wicked world, not even our troubles. —Charlie Chaplin",
        "Failure is the caterpillar. Success is the butterfly. —Peta Kelly, Earth Is Hiring",
        "In the end, just three things matter: How well we have lived. How well we have loved. How well we have learned to let go. —Jack Kornfield",
        "Every moment is a fresh beginning. —T.S. Eliot",
        "Difficult roads often lead to beautiful destinations. The best is yet to come. —Zig Ziglar",
        "Everyone has inside them a piece of good news. The good news is you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is. —Anne Frank",
        "If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward. —Martin Luther King, Jr.",
        "You are braver than you believe, stronger than you seem, and smarter than you think. —A.A. Milne, Christopher Robin",
        "The world breaks everyone, and afterward, some are strong at the broken places. —Ernest Hemingway",
        "… for a man that flies from his fear may find that he has only taken a shortcut to meet it. —J.R.R. Tolkien",
        "Pain and suffering are always inevitable for a large intelligence and a deep heart. —Fyodor Dostoevsky, Crime and Punishment",
        "Even a happy life cannot be without a measure of darkness, and the word ‘happy’ would lose its meaning if it were not balanced by sadness. —Carl G. Jung",
        "Some days are just bad days, that’s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that’s just the way it is! —Dita Von Teese",
        "Everyone goes through bad days, but that does not mean you should stop enjoying the good days. —S. Sreesanth",
        "In the depths of winter, I finally learned that within me there lay an invincible summer. —Albert Camus",
        "You may not control all the events that happen to you, but you can decide not to be reduced by them. —Maya Angelou",
        "Sometimes in life, we need a few bad days in order to keep the good ones in perspective. —Colleen Hoover, Maybe Someday",
        "The tempests of life can die down as though they had never been. —F.M. Mayor, The Rector’s Daughter",
        "Be patient. Sometimes you have to go through the worst to get to the best. Give time some time. —Karen Salmansohn",
        "I am not afraid of storms for I am learning how to sail my ship. —Louisa May Alcott, Little Women",
        "Life is 10% what happens to you and 90% of how you react. —Charles R. Swindoll",
        "Don’t plant your bad days. They grow into weeks. The weeks grow into months. —Tom Waits, All the Bad Days",
        "It’s impossible to swim, bike and run for the best part of a day and not experience bad times. —Chrissie Wellington, A Life Without Limits",
        "There is no good day or bad day, only good or bad actions. —Amit Kalantri, Wealth of Words",
        "We are all ordinary. We are all boring. We are all spectacular. We are all shy. We are all bold. We are all heroes. We are all helpless. It just depends on the day. —Brad Meltzer",
        "We don’t even know how strong we are until we are forced to bring that hidden strength forward. – Isabel Allende",
        "Greatness is not a function of circumstance. Greatness, it turns out, is largely a matter of conscious choice, and discipline. — Jim Collins, Good to Great",
        "When you do something beautiful, and nobody noticed, do not be sad, for the sun every morning is a beautiful spectacle, yet most of the audience still sleeps. —John Lennon",
        "Our greatest glory is not in never falling, but in rising every time we fall. — Oliver Goldsmith, The Citizens of the World",
        "Let nothing due to a cause outside yourself disturb your calm. —Marcus Aurelius, Meditations",
        "Tough times never last, but tough people do. –Robert H. Schuller",
        "You can become blind by seeing each day as a similar one. Each day is a different one, each day brings a miracle of its own. It’s just a matter of paying attention to this miracle.  –Paulo Coelho",
        "We will fail when we fail to try. ―Rosa Parks",
        "Don’t be afraid to give up the good to go for the great. ―John D. Rockefeller",
        "Stones and sticks are thrown only at fruit-bearing trees. ―Sumi",
        "Never confuse a single defeat with a final defeat. —F. Scott Fitzgerald",
        "Never allow a person to tell you no who doesn’t have the power to say yes. —Eleanor Roosevelt",
        "The individual who says it is not possible should move out of the way of those doing it. —Tricia Cunningham",
        "You may have to fight a battle more than once to win it. —Margaret Thatcher",
        "Instead of worrying about what you cannot control, shift your energy to what you can create. —Roy T. Bennett, The Light in the Heart",
        "It’s hard to beat a person who never gives up. — Babe Ruth"
    ]
}

else if (document.querySelector("#strategic-hero")) {
    messages = [
        "The only true wisdom is in knowing you know nothing. – Socrates",
        "I cannot teach anybody anything. I can only make them think. – Socrates",
        "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
        "To know what you know and what you do not know, that is true knowledge. – Confucius",
        "The greatest teacher, failure is. – Yoda",
        "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others. – Jack Welch",
        "The growth and development of people is the highest calling of leadership. – Harvey S. Firestone",
        "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires. – William Arthur Ward",
        "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves. – Lao Tzu",
        "Imagination is more important than knowledge. – Albert Einstein",
        "A goal is a dream with a deadline. – Napoleon Hill",
        "If you want to be happy, set a goal that commands your thoughts, liberates your energy, and inspires your hopes. – Andrew Carnegie",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Henry David Thoreau",
        "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. — Albert Einstein",
        "One learns from books and example only that certain things can be done. Actual learning requires that you do those things. — Frank Herbert",
        "A man who asks is a fool for five minutes. A man who never asks is a fool for life.” — Chinese Proverb",
        "You cannot expect victory and plan for defeat. ―Joel Osteen",
        "Don’t sit down and wait for the opportunities to come. Get up and make them. —Madam C.J. Walker",
        "The moment you doubt whether you can fly, you cease forever to be able to do it. —J.M. Barrie, Peter Pan",
        "It's good to do uncomfortable things. It's weight training for life. —Anne LaMott",
        "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
        "Don’t try. Do. ~ Yoda",
        "Those who flow as life flows know they need no other force. ~ Lao Tzu",
        "Learning is not attained by chance. It must be sought for with ardor and attended to with diligence. ~ Abigail Adams",
        "If life were predictable it would cease to be life, and be without flavor. ~ Eleanor Roosevelt",
        "Life is like riding a bicycle. To keep your balance, you must keep moving. ~ Albert Einstein",
        "There’s room for all of us to win. If you don’t live by that, prepare to lose. ~ Boss Babe",
        "There is nothing impossible to they who will try. ~ Alexander the Great",
        "So plant your own gardens and decorate your own soul, instead of waiting for someone to bring you flowers. ~ Jorge Luis Borges",
        "Everywhere is within walking distance if you have the time. ~ Stephen Wright"
    ]
}


// function to avoid repeating quotes

let lastindex = -1;
function randomMessage() {
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (randomIndex === lastindex);

    lastindex = randomIndex;
    return messages[randomIndex];
}


// show quote

quote.textContent = randomMessage();

// button + fade effect

button.addEventListener("click", () => {
    quote.classList.add("fade-out");

    setTimeout(() => {
        quote.textContent = randomMessage();
        quote.classList.remove("fade-out");

        // forces to repeat animation when the button is clicked again
        void quote.offsetWidth;
        
    }, 350);    
});