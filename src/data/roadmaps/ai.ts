import { Domain } from "../types";

export const aiMLDomain: Domain = {
  id: "ai-ml", slug: "ai-machine-learning", name: "AI & Machine Learning",
  description: "Dive into data, train models, and build intelligent systems powered by AI.",
  icon: "Brain", color: "#f43f5e",
  subPaths: [
    {
      id: "ml-foundation", slug: "ml-foundation", name: "ML Foundation",
      description: "Understand the math and models behind intelligent systems.",
      difficulty: "Beginner", estimatedTime: "3-5 months", icon: "LineChart",
      tags: ["Python", "Math", "Scikit"],
      resources: [
        { title: "Machine Learning Full Course – freeCodeCamp", url: "https://www.youtube.com/watch?v=NWONeJKn6kc", type: "video" },
        { title: "Andrew Ng – ML Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction", type: "course" },
        { title: "StatQuest – ML & Statistics Playlist", url: "https://www.youtube.com/@statquest", type: "video" },
        { title: "Scikit-learn Official Documentation", url: "https://scikit-learn.org/stable/user_guide.html", type: "docs" },
        { title: "Machine Learning Tamil Full Course", url: "https://www.youtube.com/results?search_query=machine+learning+full+course+tamil+beginners", type: "video" },
      ],
      phases: [
        {
          id: "ml-p1", title: "Math for ML", description: "Linear algebra, calculus, and probability",
          topics: [
            {
              id: "ml-p1-t1", name: "Linear Algebra", description: "Vectors, matrices, and dot product", timeEstimate: "2 weeks", difficulty: "Beginner", details: "Linear Algebra – vectors, matrices, dot product, eigenvalues",
              resources: [
                { title: "3Blue1Brown – Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2ZVXqKuYcUoMaM", type: "video" },
                { title: "Linear Algebra ML Search", url: "https://www.youtube.com/results?search_query=Linear+Algebra+machine+learning+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p1-t2", name: "Calculus", description: "Derivatives, partial derivatives", timeEstimate: "1 week", difficulty: "Intermediate", details: "Calculus – derivatives, partial derivatives, chain rule",
              resources: [
                { title: "3Blue1Brown – Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", type: "video" },
                { title: "Calculus ML Search", url: "https://www.youtube.com/results?search_query=Calculus+machine+learning+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p1-t3", name: "Probability & Statistics", description: "Distributions, Bayes theorem", timeEstimate: "2 weeks", difficulty: "Intermediate", details: "Probability & Statistics – distributions, Bayes theorem, expectation",
              resources: [
                { title: "StatQuest – Statistics & Probability", url: "https://www.youtube.com/@statquest", type: "video" },
                { title: "Probability Statistics ML Search", url: "https://www.youtube.com/results?search_query=Probability+Statistics+machine+learning+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p1-t4", name: "Gradient Descent", description: "Intuition and math", timeEstimate: "1 week", difficulty: "Advanced", details: "Gradient Descent – intuition and math",
              resources: [
                { title: "ML Math Tamil", url: "https://www.youtube.com/results?search_query=machine+learning+mathematics+tamil+tutorial", type: "video" },
                { title: "Gradient Descent Intuition", url: "https://www.youtube.com/results?search_query=Gradient+Descent+intuition+machine+learning", type: "video" }
              ]
            },
            {
              id: "ml-p1-t5", name: "Loss Functions", description: "MSE, Cross-Entropy", timeEstimate: "1 week", difficulty: "Intermediate", details: "Loss functions – MSE, Cross-Entropy",
              resources: [
                { title: "Loss Functions Explained", url: "https://www.youtube.com/results?search_query=Loss+functions+MSE+Cross-Entropy", type: "video" }
              ]
            }
          ]
        },
        {
          id: "ml-p2", title: "Core ML Algorithms", description: "Regression, Classification, and Clustering",
          topics: [
            {
              id: "ml-p2-t1", name: "Machine Learning Paradigms", description: "Supervised vs Unsupervised", timeEstimate: "1 week", difficulty: "Beginner", details: "Supervised vs Unsupervised vs Reinforcement Learning",
              resources: [
                { title: "Andrew Ng – ML Specialization", url: "https://www.coursera.org/specializations/machine-learning-introduction", type: "course" }
              ]
            },
            {
              id: "ml-p2-t2", name: "Linear & Polynomial Regression", description: "Predicting continuous values", timeEstimate: "1 week", difficulty: "Beginner", details: "Linear Regression and Polynomial Regression",
              resources: [
                { title: "StatQuest – ML Algorithms Playlist", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF", type: "video" }
              ]
            },
            {
              id: "ml-p2-t3", name: "Logistic Regression", description: "Classification modeling", timeEstimate: "1 week", difficulty: "Intermediate", details: "Logistic Regression and classification",
              resources: [
                { title: "ML Tamil Full Course", url: "https://www.youtube.com/results?search_query=machine+learning+full+course+tamil", type: "video" }
              ]
            },
            {
              id: "ml-p2-t4", name: "Decision Trees & Random Forests", description: "Tree-based ensembles", timeEstimate: "1 week", difficulty: "Intermediate", details: "Decision Trees and Random Forests",
              resources: [
                { title: "Scikit-learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html", type: "docs" }
              ]
            },
            {
              id: "ml-p2-t5", name: "Support Vector Machines (SVM)", description: "Margin classification", timeEstimate: "1 week", difficulty: "Intermediate", details: "Support Vector Machines (SVM)",
              resources: [
                { title: "SVM Tutorial Search", url: "https://www.youtube.com/results?search_query=Support+Vector+Machines+SVM+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p2-t6", name: "K-Nearest Neighbors (KNN)", description: "Distance-based inference", timeEstimate: "1 week", difficulty: "Intermediate", details: "K-Nearest Neighbors (KNN)",
              resources: [
                { title: "KNN Tutorial Search", url: "https://www.youtube.com/results?search_query=K-Nearest+Neighbors+KNN+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p2-t7", name: "K-Means Clustering", description: "Unsupervised learning", timeEstimate: "1 week", difficulty: "Intermediate", details: "K-Means Clustering",
              resources: [
                { title: "K-Means Tutorial Search", url: "https://www.youtube.com/results?search_query=K-Means+Clustering+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p2-t8", name: "Principal Component Analysis", description: "Dimensionality reduction", timeEstimate: "1 week", difficulty: "Advanced", details: "Principal Component Analysis (PCA)",
              resources: [
                { title: "PCA Tutorial Search", url: "https://www.youtube.com/results?search_query=Principal+Component+Analysis+PCA+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p2-t9", name: "Bias-Variance & Regularization", description: "Overfitting, Underfitting, L1/L2", timeEstimate: "1 week", difficulty: "Advanced", details: "Bias-Variance Tradeoff, Overfitting, Underfitting, Regularization (L1/L2)",
              resources: [
                { title: "Regularization Tutorial Search", url: "https://www.youtube.com/results?search_query=Regularization+L1+L2+machine+learning", type: "video" }
              ]
            }
          ]
        },
        {
          id: "ml-p3", title: "ML in Practice", description: "Real-world dataset handling",
          topics: [
            {
              id: "ml-p3-t1", name: "Data Preprocessing", description: "Missing values, encoding", timeEstimate: "1 week", difficulty: "Intermediate", details: "Data preprocessing – missing values, encoding, scaling",
              resources: [
                { title: "Krish Naik – ML Projects", url: "https://www.youtube.com/@krishnaik06", type: "video" }
              ]
            },
            {
              id: "ml-p3-t2", name: "Feature Engineering", description: "Selection and creation", timeEstimate: "1 week", difficulty: "Intermediate", details: "Feature engineering and feature selection",
              resources: [
                { title: "Kaggle Learn – Free Courses", url: "https://www.kaggle.com/learn", type: "course" }
              ]
            },
            {
              id: "ml-p3-t3", name: "Cross-Validation", description: "Train/Val/Test splits", timeEstimate: "1 week", difficulty: "Intermediate", details: "Train/Validation/Test split and Cross-validation",
              resources: [
                { title: "ML Projects Tamil", url: "https://www.youtube.com/results?search_query=machine+learning+projects+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p3-t4", name: "Evaluation Metrics", description: "Accuracy, Precision, Recall, F1", timeEstimate: "1 week", difficulty: "Intermediate", details: "Evaluation metrics – Accuracy, Precision, Recall, F1, ROC-AUC",
              resources: [
                { title: "Evaluation Metrics Search", url: "https://www.youtube.com/results?search_query=Evaluation+metrics+Accuracy+Precision+Recall+ROC-AUC", type: "video" }
              ]
            },
            {
              id: "ml-p3-t5", name: "Hyperparameter Tuning", description: "GridSearch, RandomSearch", timeEstimate: "1 week", difficulty: "Advanced", details: "Hyperparameter tuning – GridSearch, RandomSearch",
              resources: [
                { title: "Hyperparameter Tuning Search", url: "https://www.youtube.com/results?search_query=Hyperparameter+tuning+GridSearch", type: "video" }
              ]
            },
            {
              id: "ml-p3-t6", name: "Pipelines with Scikit-Learn", description: "Automating workflows", timeEstimate: "1 week", difficulty: "Advanced", details: "Pipelines with scikit-learn",
              resources: [
                { title: "Hands-on ML Book (Free Preview)", url: "https://github.com/ageron/handson-ml3", type: "docs" }
              ]
            },
            {
              id: "ml-p3-t7", name: "EDA (Exploratory Data Analysis)", description: "Pandas, Matplotlib, Seaborn", timeEstimate: "2 weeks", difficulty: "Beginner", details: "EDA with Pandas, Matplotlib, Seaborn",
              resources: [
                { title: "EDA Tutorial Search", url: "https://www.youtube.com/results?search_query=EDA+Pandas+Matplotlib+Seaborn+tutorial", type: "video" }
              ]
            },
            {
              id: "ml-p3-t8", name: "Kaggle Workflow", description: "Putting it together", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Kaggle competition workflow",
              resources: [
                { title: "Kaggle Workflow Search", url: "https://www.youtube.com/results?search_query=Kaggle+competition+workflow", type: "video" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "deep-learning", slug: "deep-learning", name: "Deep Learning",
      description: "Neural networks that learn like the brain — at scale.",
      difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Network",
      tags: ["PyTorch", "Neural Nets", "CNN"],
      resources: [
        { title: "Deep Learning Specialization – Andrew Ng (Coursera)", url: "https://www.coursera.org/specializations/deep-learning", type: "course" },
        { title: "3Blue1Brown – Neural Networks Series", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video" },
        { title: "Fast.ai – Practical Deep Learning", url: "https://course.fast.ai/", type: "course" },
        { title: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "docs" },
        { title: "Deep Learning Tamil Full Course", url: "https://www.youtube.com/results?search_query=deep+learning+full+course+tamil+neural+networks", type: "video" },
      ],
      phases: [
        {
          id: "dl-p1", title: "Neural Network Fundamentals", description: "Perceptron and multi-layer perceptron",
          topics: [
            {
              id: "dl-p1-t1", name: "Perceptrons & MLPs", description: "Multi-layer perceptron (MLP)", timeEstimate: "1 week", difficulty: "Beginner", details: "Perceptron and multi-layer perceptron (MLP)",
              resources: [
                { title: "3Blue1Brown – Neural Networks", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video" }
              ]
            },
            {
              id: "dl-p1-t2", name: "Activation Functions", description: "ReLU, Sigmoid, Softmax", timeEstimate: "1 week", difficulty: "Intermediate", details: "Activation functions – ReLU, Sigmoid, Tanh, Softmax",
              resources: [
                { title: "Deep Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/deep-learning", type: "course" }
              ]
            },
            {
              id: "dl-p1-t3", name: "Forward Pass & Backpropagation", description: "How models learn", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Forward pass and Backpropagation",
              resources: [
                { title: "Neural Networks Tamil", url: "https://www.youtube.com/results?search_query=neural+networks+deep+learning+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "dl-p1-t4", name: "Optimizers", description: "SGD, Momentum, Adam", timeEstimate: "1 week", difficulty: "Advanced", details: "Weight initialization strategies, Optimizers – SGD, Momentum, Adam, RMSProp",
              resources: [
                { title: "Optimizers Search", url: "https://www.youtube.com/results?search_query=Deep+learning+optimizers+SGD+Adam", type: "video" }
              ]
            },
            {
              id: "dl-p1-t5", name: "Batching & Training", description: "Stochastic Gradient Descent", timeEstimate: "1 week", difficulty: "Intermediate", details: "Batch, Mini-batch, Stochastic Gradient Descent",
              resources: [
                { title: "Batching explained Search", url: "https://www.youtube.com/results?search_query=Mini-batch+Stochastic+Gradient+Descent", type: "video" }
              ]
            },
            {
              id: "dl-p1-t6", name: "Dropout & Batch Norm", description: "Regularization techniques", timeEstimate: "1 week", difficulty: "Advanced", details: "Dropout and Batch Normalization",
              resources: [
                { title: "Dropout / Batch Norm Search", url: "https://www.youtube.com/results?search_query=Dropout+Batch+Normalization", type: "video" }
              ]
            },
            {
              id: "dl-p1-t7", name: "First Neural Net", description: "PyTorch/TensorFlow basics", timeEstimate: "1 week", difficulty: "Beginner", details: "Build your first neural net with PyTorch or TensorFlow",
              resources: [
                { title: "PyTorch Official Tutorials", url: "https://pytorch.org/tutorials/", type: "docs" }
              ]
            }
          ]
        },
        {
          id: "dl-p2", title: "CNNs & RNNs", description: "CNN layers and sequential data",
          topics: [
            {
              id: "dl-p2-t1", name: "CNN Fundamentals", description: "Conv layers, pooling, filters", timeEstimate: "1 week", difficulty: "Advanced", details: "Convolutional Neural Networks (CNN) – conv layers, pooling, filters",
              resources: [
                { title: "Andrej Karpathy – CNN Lecture", url: "https://www.youtube.com/watch?v=NfnWJUyUJYU", type: "video" }
              ]
            },
            {
              id: "dl-p2-t2", name: "CNN Architectures", description: "AlexNet, VGG, ResNet", timeEstimate: "1 week", difficulty: "Advanced", details: "CNN Architectures – AlexNet, VGG, ResNet, EfficientNet",
              resources: [
                { title: "CNN & RNN Tamil", url: "https://www.youtube.com/results?search_query=CNN+RNN+deep+learning+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "dl-p2-t3", name: "Transfer Learning", description: "Fine-tuning networks", timeEstimate: "1 week", difficulty: "Intermediate", details: "Transfer Learning and Fine-tuning",
              resources: [
                { title: "Fast.ai – Practical Deep Learning", url: "https://course.fast.ai/", type: "course" }
              ]
            },
            {
              id: "dl-p2-t4", name: "Object Detection", description: "YOLO, SSD", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Object Detection basics – YOLO, SSD",
              resources: [
                { title: "Object Detection Search", url: "https://www.youtube.com/results?search_query=Object+Detection+YOLO+tutorial", type: "video" }
              ]
            },
            {
              id: "dl-p2-t5", name: "RNNs & Sequence Models", description: "Vanishing gradient problem", timeEstimate: "1 week", difficulty: "Advanced", details: "Recurrent Neural Networks (RNN) – vanishing gradient problem",
              resources: [
                { title: "RNN Search", url: "https://www.youtube.com/results?search_query=RNN+tutorial+deep+learning", type: "video" }
              ]
            },
            {
              id: "dl-p2-t6", name: "LSTM and GRU", description: "Solving vanishing gradients", timeEstimate: "1 week", difficulty: "Advanced", details: "LSTM and GRU – how they solve vanishing gradients",
              resources: [
                { title: "LSTM GRU Search", url: "https://www.youtube.com/results?search_query=LSTM+GRU+deep+learning+tutorial", type: "video" }
              ]
            },
            {
              id: "dl-p2-t7", name: "Seq2Seq Models", description: "Encoder/Decoder architectures", timeEstimate: "1 week", difficulty: "Advanced", details: "Sequence to Sequence models, Time series forecasting with LSTMs",
              resources: [
                { title: "Papers with Code", url: "https://paperswithcode.com/", type: "tool" }
              ]
            }
          ]
        },
        {
          id: "dl-p3", title: "Transformers & Modern DL", description: "Self-attention and the Transformer Architecture",
          topics: [
            {
              id: "dl-p3-t1", name: "Attention Mechanism", description: "Intuition and math", timeEstimate: "1 week", difficulty: "Advanced", details: "Attention Mechanism – intuition and math",
              resources: [
                { title: "Illustrated Transformer (Blog)", url: "https://jalammar.github.io/illustrated-transformer/", type: "article" }
              ]
            },
            {
              id: "dl-p3-t2", name: "Self-Attention", description: "Multi-Head Attention", timeEstimate: "1 week", difficulty: "Advanced", details: "Self-Attention and Multi-Head Attention",
              resources: [
                { title: "Andrej Karpathy – Let's build GPT", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY", type: "video" }
              ]
            },
            {
              id: "dl-p3-t3", name: "Transformer Architecture", description: "Encoder & Decoder", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Transformer Architecture – encoder, decoder, positional encoding",
              resources: [
                { title: "Transformer Tamil", url: "https://www.youtube.com/results?search_query=transformer+architecture+tamil+deep+learning", type: "video" }
              ]
            },
            {
              id: "dl-p3-t4", name: "BERT & ViT", description: "Vision and text transformers", timeEstimate: "1 week", difficulty: "Advanced", details: "BERT – bidirectional pretraining, Vision Transformer (ViT)",
              resources: [
                { title: "BERT Tutorial Search", url: "https://www.youtube.com/results?search_query=BERT+Vision+Transformer+tutorial", type: "video" }
              ]
            },
            {
              id: "dl-p3-t5", name: "Diffusion Models", description: "Image generation", timeEstimate: "1 week", difficulty: "Advanced", details: "Diffusion Models basics",
              resources: [
                { title: "Diffusion Models Search", url: "https://www.youtube.com/results?search_query=Diffusion+Models+tutorial", type: "video" }
              ]
            },
            {
              id: "dl-p3-t6", name: "Scale & Hugging Face", description: "Hugging Face library", timeEstimate: "1 week", difficulty: "Intermediate", details: "Model training at scale, Intro to Hugging Face Transformers library",
              resources: [
                { title: "Hugging Face Course", url: "https://huggingface.co/learn/nlp-course/chapter1/1", type: "course" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "gen-ai-llm", slug: "gen-ai", name: "Gen AI & LLMs",
      description: "Build with large language models — the defining skill of this decade.",
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Sparkles",
      tags: ["LLMs", "LangChain", "Agents"],
      resources: [
        { title: "Andrej Karpathy – Intro to Large Language Models", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", type: "video" },
        { title: "LangChain Full Course", url: "https://www.youtube.com/watch?v=HSZ_uaif57o", type: "video" },
        { title: "DeepLearning.AI – Generative AI Short Courses", url: "https://www.deeplearning.ai/short-courses/", type: "course" },
        { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", type: "docs" },
        { title: "Generative AI Tamil Full Course", url: "https://www.youtube.com/results?search_query=generative+ai+LLM+langchain+tamil+full+course", type: "video" },
      ],
      phases: [
        {
          id: "gen-p1", title: "LLM Fundamentals", description: "Tokenization, prompts, and APIs",
          topics: [
            {
              id: "gen-p1-t1", name: "What are LLMs?", description: "Scale and emergence", timeEstimate: "1 week", difficulty: "Beginner", details: "What are LLMs – scale, emergent behavior, capabilities",
              resources: [
                { title: "Andrej Karpathy – Intro to LLMs", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g", type: "video" }
              ]
            },
            {
              id: "gen-p1-t2", name: "Tokenization & Embeddings", description: "BPE and Vectors", timeEstimate: "1 week", difficulty: "Intermediate", details: "Tokenization – BPE, WordPiece, SentencePiece, Embeddings and vector representations",
              resources: [
                { title: "LLM Tamil Tutorial", url: "https://www.youtube.com/results?search_query=large+language+models+LLM+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "gen-p1-t3", name: "GPT Architecture", description: "Autoregressive generation", timeEstimate: "1 week", difficulty: "Advanced", details: "GPT architecture – autoregressive language modeling",
              resources: [
                { title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", type: "docs" }
              ]
            },
            {
              id: "gen-p1-t4", name: "Prompt Engineering", description: "Zero-shot, few-shot, CoT", timeEstimate: "1 week", difficulty: "Beginner", details: "Prompt Engineering – zero-shot, few-shot, chain-of-thought",
              resources: [
                { title: "Prompt Engineering Search", url: "https://www.youtube.com/results?search_query=Prompt+Engineering+tutorial", type: "video" }
              ]
            },
            {
              id: "gen-p1-t5", name: "LLM APIs & Sampling", description: "Temperature, Top-p", timeEstimate: "1 week", difficulty: "Intermediate", details: "Temperature, Top-k, Top-p sampling, Using OpenAI and Anthropic APIs",
              resources: [
                { title: "Anthropic API Docs", url: "https://docs.anthropic.com/", type: "docs" },
                { title: "OpenAI API Docs", url: "https://platform.openai.com/docs/", type: "docs" }
              ]
            }
          ]
        },
        {
          id: "gen-p2", title: "Building with LLMs", description: "LangChain, RAG, Vector Databases",
          topics: [
            {
              id: "gen-p2-t1", name: "LangChain Basics", description: "Chains and memory", timeEstimate: "1 week", difficulty: "Intermediate", details: "LangChain – chains, memory, agents, tools",
              resources: [
                { title: "LangChain Full Course", url: "https://www.youtube.com/watch?v=HSZ_uaif57o", type: "video" }
              ]
            },
            {
              id: "gen-p2-t2", name: "Retrieval Augmented Generation (RAG)", description: "Vector generation", timeEstimate: "2 weeks", difficulty: "Advanced", details: "RAG (Retrieval Augmented Generation) – concept and implementation",
              resources: [
                { title: "RAG from Scratch – LangChain", url: "https://www.youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x", type: "video" }
              ]
            },
            {
              id: "gen-p2-t3", name: "Vector Databases", description: "Pinecone, ChromaDB", timeEstimate: "1 week", difficulty: "Intermediate", details: "Vector Databases – Pinecone, ChromaDB, Weaviate",
              resources: [
                { title: "ChromaDB Docs", url: "https://docs.trychroma.com/", type: "docs" }
              ]
            },
            {
              id: "gen-p2-t4", name: "Tool Use (Function Calling)", description: "Structured outputs", timeEstimate: "2 weeks", difficulty: "Advanced", details: "Function Calling / Tool Use, Structured outputs with LLMs",
              resources: [
                { title: "Gen AI Tamil", url: "https://www.youtube.com/results?search_query=generative+ai+langchain+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "gen-p2-t5", name: "Chatbots & Evaluation", description: "Conversation history", timeEstimate: "1 week", difficulty: "Intermediate", details: "Building a chatbot with conversation history, LLM evaluation strategies",
              resources: [
                { title: "LLM Evaluation Search", url: "https://www.youtube.com/results?search_query=LLM+evaluation+strategies", type: "video" }
              ]
            }
          ]
        },
        {
          id: "gen-p3", title: "Fine-tuning & Agentic AI", description: "Custom models and autonomous agents",
          topics: [
            {
              id: "gen-p3-t1", name: "Fine-Tuning Basics", description: "When to fine-tune", timeEstimate: "1 week", difficulty: "Advanced", details: "Fine-tuning LLMs – when and why",
              resources: [
                { title: "Fine-tuning LLMs", url: "https://www.youtube.com/results?search_query=fine+tuning+LLM+krish+naik", type: "video" }
              ]
            },
            {
              id: "gen-p3-t2", name: "PEFT & Instruction Tuning", description: "LoRA, QLoRA", timeEstimate: "1 week", difficulty: "Advanced", details: "PEFT – LoRA and QLoRA, Instruction tuning and RLHF concept",
              resources: [
                { title: "PEFT LoRA Search", url: "https://www.youtube.com/results?search_query=PEFT+LoRA+QLoRA+tutorial", type: "video" }
              ]
            },
            {
              id: "gen-p3-t3", name: "Local LLMs", description: "Ollama, LM Studio", timeEstimate: "1 week", difficulty: "Intermediate", details: "Running models locally – Ollama, LM Studio",
              resources: [
                { title: "Ollama", url: "https://ollama.com/", type: "tool" }
              ]
            },
            {
              id: "gen-p3-t4", name: "Agentic AI Concepts", description: "Concept of an agent", timeEstimate: "1 week", difficulty: "Advanced", details: "Agentic AI – what makes an agent",
              resources: [
                { title: "Agentic AI Tamil", url: "https://www.youtube.com/results?search_query=agentic+AI+multi+agent+tamil+tutorial", type: "video" }
              ]
            },
            {
              id: "gen-p3-t5", name: "Multi-Agent Frameworks", description: "LangGraph, CrewAI", timeEstimate: "2 weeks", difficulty: "Advanced", details: "LangGraph (stateful), CrewAI (multi-agent)",
              resources: [
                { title: "LangGraph Tutorial", url: "https://www.youtube.com/results?search_query=langgraph+tutorial+agentic+ai", type: "video" }
              ]
            },
            {
              id: "gen-p3-t6", name: "MCP & Deployment", description: "Context integration and FastAPI", timeEstimate: "2 weeks", difficulty: "Advanced", details: "MCP (Model Context Protocol), Deploying LLM apps – FastAPI + Docker",
              resources: [
                { title: "DeepLearning.AI – Short Courses", url: "https://www.deeplearning.ai/short-courses/", type: "course" },
                { title: "MCP Tutorial Search", url: "https://www.youtube.com/results?search_query=Model+Context+Protocol+MCP", type: "video" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
