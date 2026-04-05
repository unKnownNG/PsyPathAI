import { Domain } from "../types";

export const aiMLDomain: Domain = {
  id: "ai-ml", slug: "ai-machine-learning", name: "AI & Machine Learning",
  description: "Dive into data, train models, and build intelligent systems powered by AI.",
  icon: "Brain", color: "#f43f5e",
  subPaths: [
    {
      id: "machine-learning", slug: "machine-learning", name: "Machine Learning Foundations",
      description: "Learn the core mathematics, statistics, and algorithms that power modern AI.",
      difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "LineChart",
      tags: ["Python", "Scikit-Learn", "Math"],
      phases: [
        {
          id: "ml-p1", title: "Math & Python Basics", description: "The foundation of AI",
          topics: [
            {
              id: "ml-t1", name: "Linear Algebra & Calculus", description: "The math behind the models", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Vectors, matrices, eigenvectors, derivatives, and gradient descent intuition.",
              resources: [
                { title: "Mathematics for Machine Learning", url: "https://mml-book.github.io/", type: "docs" },
                { title: "Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "video" }
              ]
            },
            {
              id: "ml-t2", name: "Data Science Python", description: "NumPy, Pandas, Matplotlib", timeEstimate: "2 weeks", difficulty: "Beginner",
              details: "Data manipulation, cleaning, and visualization using Python's core data libraries.",
              resources: [
                { title: "Kaggle Python Course", url: "https://www.kaggle.com/learn/python", type: "course" },
                { title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/", type: "docs" }
              ]
            }
          ]
        },
        {
          id: "ml-p2", title: "Classical Machine Learning", description: "Supervised and unsupervised learning",
          topics: [
            {
              id: "ml-t3", name: "Supervised Learning", description: "Regression & Classification", timeEstimate: "4 weeks", difficulty: "Intermediate",
              details: "Linear regression, logistic regression, SVMs, decision trees, and random forests.",
              resources: [
                { title: "Machine Learning by Andrew Ng", url: "https://www.coursera.org/specializations/machine-learning-introduction", type: "course" },
                { title: "Scikit-Learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html", type: "docs" }
              ]
            },
            {
              id: "ml-t4", name: "Unsupervised Learning", description: "Clustering & Dimensionality Reduction", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "K-means, hierarchical clustering, and PCA (Principal Component Analysis).",
              resources: [
                { title: "StatQuest: K-means clustering", url: "https://www.youtube.com/watch?v=4b5d3muPQmA", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "deep-learning", slug: "deep-learning", name: "Deep Learning",
      description: "Build neural networks using PyTorch or TensorFlow for complex problem solving.",
      difficulty: "Advanced", estimatedTime: "5-8 months", icon: "Network",
      tags: ["PyTorch", "Neural Networks", "TensorFlow"],
      phases: [
        {
          id: "dl-p1", title: "Neural Networks Fundamentals", description: "Building brains from scratch",
          topics: [
            {
              id: "dl-t1", name: "Perceptrons & Backpropagation", description: "How models learn", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Understanding activation functions, forward pass, loss functions, and backprop.",
              resources: [
                { title: "Neural Networks (3Blue1Brown)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video" },
                { title: "Fast.ai — Practical Deep Learning", url: "https://course.fast.ai/", type: "course" }
              ]
            },
            {
              id: "dl-t2", name: "Frameworks (PyTorch)", description: "Tensors & Autograd", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Building your first models using PyTorch, custom dataloaders, and training loops.",
              resources: [
                { title: "PyTorch Basics", url: "https://pytorch.org/tutorials/beginner/basics/intro.html", type: "docs" }
              ]
            }
          ]
        },
        {
          id: "dl-p2", title: "Modern Architectures", description: "CNNs and Sequence Models",
          topics: [
            {
              id: "dl-t3", name: "Convolutional Neural Networks", description: "Grid and image data", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Filters, pooling, strides, and popular architectures like ResNet.",
              resources: [
                { title: "CS231n: CNNs for Visual Recognition", url: "https://cs231n.stanford.edu/", type: "course" }
              ]
            },
            {
              id: "dl-t4", name: "RNNs & LSTMs", description: "Sequential data", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Time series processing, vanishing gradients, and sequence-to-sequence modeling.",
              resources: [
                { title: "Understanding LSTMs", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", type: "article" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "nlp", slug: "nlp", name: "Natural Language Processing",
      description: "Teach computers to understand, interpret, and generate human language.",
      difficulty: "Advanced", estimatedTime: "5-7 months", icon: "MessageSquare",
      tags: ["Transformers", "HuggingFace", "Text Processing"],
      phases: [
        {
          id: "nlp-p1", title: "Text Foundations", description: "Processing unstructured text",
          topics: [
            {
              id: "nlp-t1", name: "Text Preprocessing & Embeddings", description: "Tokenization to Word2Vec", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Regex, NLTK, spaCy, TF-IDF, Word2Vec, and GloVe embeddings.",
              resources: [
                { title: "spaCy 101", url: "https://spacy.io/usage/spacy-101", type: "docs" },
                { title: "Word2Vec Tutorial", url: "https://jalammar.github.io/illustrated-word2vec/", type: "article" }
              ]
            }
          ]
        },
        {
          id: "nlp-p2", title: "The Transformer Era", description: "Attention is all you need",
          topics: [
            {
              id: "nlp-t2", name: "Attention Mechanisms", description: "Self-attention & multi-head", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Understanding the math behind Q, K, V matrices and attention weights.",
              resources: [
                { title: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/", type: "article" }
              ]
            },
            {
              id: "nlp-t3", name: "Hugging Face & BERT", description: "Fine-tuning state-of-the-art", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Using the Hugging Face Transformers library to fine-tune BERT for text classification.",
              resources: [
                { title: "Hugging Face NLP Course", url: "https://huggingface.co/learn/nlp-course/chapter1/1", type: "course" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "generative-ai", slug: "generative-ai", name: "Generative AI & LLMs",
      description: "Build applications using Large Language Models, RAG, and prompt engineering.",
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Sparkles",
      tags: ["OpenAI", "LangChain", "RAG"],
      phases: [
        {
          id: "gen-p1", title: "Building with APIs", description: "Leveraging frontier models",
          topics: [
            {
              id: "gen-t1", name: "Prompt Engineering", description: "Effective communication", timeEstimate: "1 week", difficulty: "Beginner",
              details: "Few-shot prompting, chain-of-thought, and system instructions.",
              resources: [
                { title: "Prompting Guide", url: "https://www.promptingguide.ai/", type: "docs" }
              ]
            },
            {
              id: "gen-t2", name: "LLM APIs & Streaming", description: "OpenAI & Anthropic", timeEstimate: "2 weeks", difficulty: "Intermediate",
              details: "Calling APIs, handling tokens, configuring temperature, and Server-Sent Events (SSE).",
              resources: [
                { title: "OpenAI API Docs", url: "https://platform.openai.com/docs/introduction", type: "docs" },
                { title: "Vercel AI SDK", url: "https://sdk.vercel.ai/docs", type: "tool" }
              ]
            }
          ]
        },
        {
          id: "gen-p2", title: "Advanced Context", description: "Connecting AI to data",
          topics: [
            {
              id: "gen-t3", name: "RAG & Vector Databases", description: "Retrieval-Augmented Generation", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Generating embeddings, storing in Pinecone/Chroma, and semantic search.",
              resources: [
                { title: "What is RAG?", url: "https://www.ibm.com/topics/retrieval-augmented-generation", type: "article" },
                { title: "LangChain Docs", url: "https://python.langchain.com/docs/get_started/introduction", type: "tool" }
              ]
            },
            {
              id: "gen-t4", name: "Agents & Tool Calling", description: "Autonomous AI", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Function calling (JSON mode), ReAct framework, and multi-agent systems.",
              resources: [
                { title: "LLM Powered Autonomous Agents", url: "https://lilianweng.github.io/posts/2023-06-23-agent/", type: "article" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
