window.NLP_PROGRAMS = {
  "1A": {
    "title": "Sentence & word tokenize",
    "code": "import nltk\nfrom nltk.tokenize import sent_tokenize, word_tokenize\ntext = \"Sherlock Holmes is the best Detective ever.\"\nsentence = sent_tokenize(text)\nwords = word_tokenize(text)\nprint(sentence)\nfor i, sent in enumerate(sentence, 1):\n    print(f\"{i}, {sent}\")\nprint(f\"\\nTotal tokens:{len(words)}\")\nprint(f\"The first 10 tokens: {words[:10]}\")"
  },
  "1B": {
    "title": "Stopword removal",
    "code": "import nltk\nfrom nltk.tokenize import word_tokenize\nfrom nltk.corpus import stopwords\nnltk.download('punkt'); nltk.download('stopwords')\nstopword_set = set(stopwords.words('english'))\ntext = input('Enter a sentence: ')\ntokens = word_tokenize(text)\nprint(\"Count of tokens before:\", len(tokens))\nfiltered_tokens = [t.lower() for t in tokens\n                   if t.lower() not in stopword_set]\nprint(\"Count of tokens after:\", len(filtered_tokens))"
  },
  "1C": {
    "title": "Porter stemmer",
    "code": "import nltk\nfrom nltk.stem import PorterStemmer\nnltk.download('punkt')\nps = PorterStemmer()\ntext = input(\"Enter a sentence: \")\ntokens = nltk.word_tokenize(text)\nstemmed_words = [ps.stem(t) for t in tokens]\nprint(\"Original tokens:\", tokens)\nprint(\"Stemmed tokens:\", stemmed_words)"
  },
  "2A": {
    "title": "POS tagging",
    "code": "import nltk\nfrom nltk.tokenize import word_tokenize\nfrom nltk.tag import pos_tag\nsentence = \"The quick brown fox jumps over the lazy dog.\"\ntokens = word_tokenize(sentence)\ntagged_output = pos_tag(tokens)\nprint(\"Input Sentence:\", sentence)\nprint(\"\\nPOS Tagged Output:\")\nfor word, tag in tagged_output:\n    print(f\"{word}: {tag}\")"
  },
  "2B": {
    "title": "Lemmatization",
    "code": "import nltk\nfrom nltk.tokenize import word_tokenize\nfrom nltk.stem import WordNetLemmatizer\nnltk.download('wordnet')\nlemmatizer = WordNetLemmatizer()\ninput_text = \"The cats were chasing mice through the yard.\"\ntokens = word_tokenize(input_text)\nlemmatized_tokens = [lemmatizer.lemmatize(t) for t in tokens]\nlemmatized_text = \" \".join(lemmatized_tokens)\nprint(\"Original Text:  \", input_text)\nprint(\"Lemmatized Text:\", lemmatized_text)"
  },
  "3A": {
    "title": "Chunking (RegexpParser)",
    "code": "import nltk\nfrom nltk.tokenize import word_tokenize\nfrom nltk.tag import pos_tag\nfrom nltk.chunk import RegexpParser\nsentence = \"The smart student solved difficult problem in the classroom\"\ntokens = word_tokenize(sentence)\ntagged_words = pos_tag(tokens)\ngrammar = r\"\"\"\n  NP : {<DT>?<JJ>*<NN.*>+}\n  PP : {<IN><NP>}\n  VP : {<VB.*><NP|PP>*}\n  CLAUSE : {<NP><VP>}\n\"\"\"\nparser = RegexpParser(grammar)\nchunk_tree = parser.parse(tagged_words)\nprint(\"Chunk Tree Output : \")\nprint(chunk_tree)\nchunk_tree.draw()"
  },
  "3B": {
    "title": "Named Entity Recognition (ne_chunk)",
    "code": "import nltk\nfrom nltk.tokenize import word_tokenize\nfrom nltk.tag import pos_tag\nfrom nltk.chunk import ne_chunk\ninput_text = \"Barack Obama visited Google headquarters in California.\"\ntokens = word_tokenize(input_text)\ntagged_tokens = pos_tag(tokens)\nner_tree = ne_chunk(tagged_tokens)\nprint(\"Named Entity Recognition Output : \")\nprint(ner_tree)\nner_tree.draw()"
  },
  "4A": {
    "title": "TF-IDF",
    "code": "import nltk, string\nfrom nltk.corpus import stopwords\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nnltk.download('punkt'); nltk.download('stopwords')\ncorpus = [\n    \"The quick brown fox jumps over the lazy dog.\",\n    \"A brown fox is fast and quick.\",\n    \"The lazy dog sleeps.\"\n]\ndef preprocess_text(doc):\n    tokens = nltk.word_tokenize(doc.lower())\n    stop_words = set(stopwords.words('english'))\n    cleaned_tokens = [w for w in tokens\n        if w not in string.punctuation and w not in stop_words]\n    return \" \".join(cleaned_tokens)\ncleaned_corpus = [preprocess_text(d) for d in corpus]\nvectorizer = TfidfVectorizer()\ntfidf_matrix = vectorizer.fit_transform(cleaned_corpus)\nprint(\"Vocabulary:\", vectorizer.get_feature_names_out())\nprint(\"TF-IDF Matrix:\\n\", tfidf_matrix.toarray())"
  },
  "4B": {
    "title": "CFG parsing (ChartParser)",
    "code": "import nltk\ngrammar = nltk.CFG.fromstring(\"\"\"\n  S -> NP VP\n  NP -> 'describe'\n  VP -> 'your' 'work'\n\"\"\")\nparser = nltk.ChartParser(grammar)\nsentence = \"describe your work\"\ntokens = sentence.split()\ntrees = list(parser.parse(tokens))\nfor tree in trees:\n    print(tree)\nif len(trees) > 0:\n    print(\"\\nResult: The sentence is grammatically valid.\")\nelse:\n    print(\"\\nResult: The sentence does not match the grammar.\")"
  },
  "5A": {
    "title": "N-grams",
    "code": "import nltk\nfrom nltk.util import ngrams\nnltk.download('punkt')\ntext = \"This is a simple sample text to test ngrams.\"\ntokens = nltk.word_tokenize(text)\nfor i in range(1, 4):\n    print(f\"\\n--- {i}-grams ---\")\n    for ngram in ngrams(sequence=tokens, n=i):\n        print(ngram)"
  },
  "5B": {
    "title": "Bigram probability",
    "code": "from collections import Counter\ncorpus = [\"this is my cat\", \"this is my dog\"]\nwords = \" \".join(corpus).split()\nuni = Counter(words)\nbi = Counter(zip(words, words[1:]))\ntest = \"this is my cat\".split()\np = 1\nfor w1, w2 in zip(test, test[1:]):\n    p *= bi[(w1, w2)] / uni[w1] if bi[(w1, w2)] else 0\nprint(\"Sentence:\", \" \".join(test))\nprint(\"Probability:\", p)\n# Expected: 0.5 ; P(w2|w1) = count(w1,w2)/count(w1)"
  },
  "6": {
    "title": "NER with Stanza",
    "code": "import stanza\nstanza.download('en')\nnlp = stanza.Pipeline('en', processors='tokenize,ner')\ndef extract_entities(text):\n    doc = nlp(text)\n    for e in doc.ents:\n        print(e.text, \"->\", e.type)\ndocuments = [\n    \"Barack Obama was born in Hawaii.\",\n    \"Microsoft was founded by Bill Gates.\",\n    \"Apple is located in California.\",\n    \"John visited Bengaluru on Monday.\"\n]\nfor i, text in enumerate(documents, 1):\n    print(\"\\nDocument\", i)\n    extract_entities(text)"
  },
  "7": {
    "title": "Stopword freq & TF-IDF (Reuters)",
    "code": "import nltk\nfrom collections import Counter\nfrom nltk.corpus import reuters, stopwords\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nnltk.download('reuters')\nnltk.download('stopwords')\nnltk.download('punkt')\nnltk.download('punkt_tab')\ndef analyze():\n    docs = [reuters.raw(f) for f in reuters.fileids()]\n    sw = set(stopwords.words('english'))\n    count = Counter()\n    for d in docs:\n        count.update(w for w in nltk.word_tokenize(d.lower())\n                     if w in sw)\n    print(\"Stopwords:\", count.most_common(10))\n    v = TfidfVectorizer(stop_words='english')\n    x = v.fit_transform(docs)\n    words = v.get_feature_names_out()\n    scores = x[0].toarray()[0]\n    print(\"Top TF-IDF words:\")\n    for i in scores.argsort()[-10:][::-1]:\n        print(words[i], round(scores[i], 3))\nanalyze()"
  },
  "8": {
    "title": "Sentiment analysis (Naive Bayes)",
    "code": "import nltk\nfrom nltk.corpus import movie_reviews\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\nnltk.download('movie_reviews')\nX = [movie_reviews.raw(f) for f in movie_reviews.fileids()]\ny = [movie_reviews.categories(f)[0] for f in movie_reviews.fileids()]\nmodel = make_pipeline(TfidfVectorizer(stop_words='english'),\n                      MultinomialNB())\nmodel.fit(X, y)\nfor text in [\"This movie is excellent\", \"This movie is terrible\"]:\n    print(text, \":\", model.predict([text])[0].upper())"
  }
};
