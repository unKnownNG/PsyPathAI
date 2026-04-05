import { Domain } from "../types";

export const dataDomain: Domain = {
  id: "data", slug: "data", name: "Data",
  description: "Analyze data, build pipelines, and deploy models to production.",
  icon: "Database", color: "#38bdf8",
  subPaths: [
    { 
      id: "data-sci", slug: "data-science", name: "Data Science", 
      description: "Extract insights from complex data, perform statistical analysis, and visualize trends.", 
      difficulty: "Intermediate", estimatedTime: "6-8 months", icon: "LineChart", 
      tags: ["Python", "Statistics", "Visualization"],
      phases: [
        { 
          id: "ds-p1", title: "Data Foundations", description: "Mathematics & Statistics", 
          topics: [
            { 
              id: "ds-t1", name: "Statistics & Probability", description: "Mathematical foundation", timeEstimate: "3 weeks", difficulty: "Beginner", 
              details: "Descriptive statistics, probability distributions, hypothesis testing (p-values, t-tests), and A/B testing principles.", 
              resources: [
                { title: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr", type: "video" },
                { title: "Practical Statistics for Data Scientists", url: "https://github.com/gedeck/practical-statistics-for-data-scientists", type: "article" }
              ] 
            },
            {
              id: "ds-t2", name: "Python for Data Analysis", description: "Wrangling the data", timeEstimate: "3 weeks", difficulty: "Beginner",
              details: "Mastering Pandas DataFrames and NumPy arrays for data cleaning, joining, and aggregation.",
              resources: [
                { title: "Pandas User Guide", url: "https://pandas.pydata.org/docs/user_guide/index.html", type: "docs" },
                { title: "Kaggle Pandas Course", url: "https://www.kaggle.com/learn/pandas", type: "course" }
              ]
            }
          ] 
        },
        { 
          id: "ds-p2", title: "Storytelling & Exploration", description: "Visualizing insights", 
          topics: [
            { 
              id: "ds-t3", name: "Exploratory Data Analysis (EDA)", description: "Finding the patterns", timeEstimate: "2 weeks", difficulty: "Intermediate", 
              details: "Handling missing values, outlier detection, and correlation analysis.", 
              resources: [
                { title: "EDA with Python", url: "https://www.ibm.com/topics/exploratory-data-analysis", type: "article" }
              ] 
            },
            { 
              id: "ds-t4", name: "Data Visualization", description: "Matplotlib, Seaborn, Tableau", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Creating histograms, scatter plots, and heatmaps. Building interactive dashboards with Tableau or PowerBI.", 
              resources: [
                { title: "Seaborn Tutorial", url: "https://seaborn.pydata.org/tutorial.html", type: "docs" },
                { title: "Tableau Free Training", url: "https://www.tableau.com/learn/training", type: "video" }
              ] 
            }
          ] 
        }
      ],
    },
    { 
      id: "data-eng", slug: "data-engineering", name: "Data Engineering", 
      description: "Build robust, scalable data pipelines and distributed storage systems.", 
      difficulty: "Advanced", estimatedTime: "6-9 months", icon: "Workflow", 
      tags: ["SQL", "Spark", "Airflow", "ETL"],
      phases: [
        { 
          id: "de-p1", title: "Storage & Querying", description: "Databases & Warehouses", 
          topics: [
            { 
              id: "de-t1", name: "Advanced SQL", description: "Complex queries", timeEstimate: "3 weeks", difficulty: "Intermediate", 
              details: "Window functions, Common Table Expressions (CTEs), query optimization, and indexing strategies.", 
              resources: [
                { title: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/", type: "course" }
              ] 
            },
            {
              id: "de-t2", name: "Data Warehousing", description: "OLAP systems", timeEstimate: "2 weeks", difficulty: "Advanced",
              details: "Star schema, Snowflake/BigQuery architectures, and columnar storage.",
              resources: [
                { title: "What is a Data Warehouse?", url: "https://www.databricks.com/glossary/data-warehouse", type: "article" }
              ]
            }
          ] 
        },
        { 
          id: "de-p2", title: "Processing & Orchestration", description: "Moving the data", 
          topics: [
            { 
              id: "de-t3", name: "ETL & Pipeline Orchestration", description: "Airflow, Prefect, DBT", timeEstimate: "3 weeks", difficulty: "Advanced", 
              details: "Building DAGs in Apache Airflow, transforming data with DBT, and data observability.", 
              resources: [
                { title: "Apache Airflow Tutorial", url: "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html", type: "docs" },
                { title: "dbt Fundamentals Course", url: "https://courses.getdbt.com/courses/fundamentals", type: "course" }
              ] 
            },
            { 
              id: "de-t4", name: "Distributed Computing", description: "Hadoop & Spark", timeEstimate: "4 weeks", difficulty: "Advanced", 
              details: "Working with massive datasets using Apache Spark (PySpark), RDDs, and MapReduce concepts.", 
              resources: [
                { title: "Spark by Examples", url: "https://sparkbyexamples.com/", type: "docs" }
              ] 
            }
          ] 
        }
      ],
    },
    { 
      id: "mlops", slug: "mlops", name: "MLOps", 
      description: "Manage, deploy, and monitor machine learning models in production environments.", 
      difficulty: "Advanced", estimatedTime: "4-6 months", icon: "Settings", 
      tags: ["Docker", "MLflow", "Kubernetes", "CI/CD"],
      phases: [
        { 
          id: "mo-p1", title: "Model Management", description: "Tracking & Registering", 
          topics: [
            { 
              id: "mo-t1", name: "Experiment Tracking", description: "MLflow & W&B", timeEstimate: "2 weeks", difficulty: "Intermediate", 
              details: "Logging hyperparameters, model versions, and evaluation metrics using MLflow or Weights & Biases.", 
              resources: [
                { title: "MLflow Quickstart", url: "https://mlflow.org/docs/latest/quickstart.html", type: "docs" },
                { title: "W&B Tutorials", url: "https://docs.wandb.ai/tutorials", type: "video" }
              ] 
            }
          ] 
        },
        { 
          id: "mo-p2", title: "Model Deployment", description: "Taking models to production", 
          topics: [
            { 
              id: "mo-t2", name: "Model Serving", description: "APIs & Containerization", timeEstimate: "3 weeks", difficulty: "Advanced", 
              details: "Wrapping models in FastAPI, creating Docker containers for inference, and deploying to cloud endpoints.", 
              resources: [
                { title: "Deploying ML Models (FastAPI + Docker)", url: "https://christophergs.com/machine%20learning/2020/03/14/how-to-deploy-machine-learning-models/", type: "article" }
              ] 
            },
            {
              id: "mo-t3", name: "Monitoring & Orchestration", description: "Kubeveflow & Drift", timeEstimate: "3 weeks", difficulty: "Advanced",
              details: "Monitoring data drift, model decay, running Kubernetes inference clusters, and continuous training pipelines.",
              resources: [
                { title: "Machine Learning Engineering in Action", url: "https://github.com/alexeygrigorev/mlbookcamp-code", type: "docs" }
              ]
            }
          ] 
        }
      ],
    },
  ],
};

export const cloudDomain: Domain = {
  id: "cloud", slug: "cloud-devops", name: "Cloud & DevOps",
  description: "Master cloud infrastructure, CI/CD pipelines, and site reliability engineering.",
  icon: "Cloud", color: "#0ea5e9",
  subPaths: [
    { 
      id: "cloud-comp", slug: "cloud-computing", name: "Cloud Computing", 
      description: "Learn cloud provider ecosystems like AWS, GCP, or Azure.", 
      difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Cloud", 
      tags: ["AWS", "GCP", "IaaS"],
      phases: [
        { 
          id: "cl-p1", title: "Cloud Foundations", description: "Cloud basics", 
          topics: [
            { 
              id: "cl-t1", name: "Cloud Concepts & Services", description: "Virtualization to Serverless", timeEstimate: "3 weeks", difficulty: "Beginner", 
              details: "Understanding IaaS, PaaS, SaaS. Virtual Machines, Elastic computing, and block/object storage.", 
              resources: [
                { title: "AWS Cloud Practitioner Essentials", url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/", type: "course" }
              ] 
            },
            {
              id: "cl-t2", name: "Networking & Security", description: "Securing the cloud", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "VPCs, subnets, Security Groups, IAM roles, and Load Balancers.",
              resources: [
                { title: "AWS VPC Fundamentals", url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html", type: "docs" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "devops", slug: "devops", name: "DevOps & CI/CD", 
      description: "Automate code delivery pipelines and configure infrastructure as code.", 
      difficulty: "Intermediate", estimatedTime: "4-6 months", icon: "Settings", 
      tags: ["GitHub Actions", "Terraform", "Automation"],
      phases: [
        { 
          id: "do-p1", title: "CI/CD & Automation", description: "Never deploy manually", 
          topics: [
            { 
              id: "do-t1", name: "Continuous Integration", description: "Automated testing", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "GitHub Actions, Jenkins pipelines, running linters, and parallel test execution upon commit.", 
              resources: [
                { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "docs" }
              ] 
            },
            {
              id: "do-t2", name: "Infrastructure as Code (IaC)", description: "Terraform & Ansible", timeEstimate: "3 weeks", difficulty: "Intermediate",
              details: "Provisioning servers with Terraform, managing state, and configuring machines with Ansible playbooks.",
              resources: [
                { title: "Terraform Tutorial", url: "https://developer.hashicorp.com/terraform/tutorials", type: "docs" }
              ]
            }
          ] 
        }
      ],
    },
    { 
      id: "docker-k8s", slug: "docker-kubernetes", name: "Docker & Kubernetes", 
      description: "Master containerization and container orchestration for massive scale.", 
      difficulty: "Advanced", estimatedTime: "3-5 months", icon: "Box", 
      tags: ["Docker", "K8s", "Microservices"],
      phases: [
        { 
          id: "dk-p1", title: "Containers & Orchestration", description: "Boxing up applications", 
          topics: [
            { 
              id: "dk-t1", name: "Docker & Compose", description: "Application containers", timeEstimate: "2 weeks", difficulty: "Beginner", 
              details: "Creating optimized custom Dockerfiles, multi-stage builds, and running complex stacks with docker-compose.", 
              resources: [
                { title: "Docker Getting Started", url: "https://docs.docker.com/get-started/", type: "docs" }
              ] 
            },
            {
              id: "dk-t2", name: "Kubernetes (K8s)", description: "Fleet management", timeEstimate: "4 weeks", difficulty: "Advanced",
              details: "Pods, Deployments, Services, Ingress controllers, ConfigMaps, and Helm charts.",
              resources: [
                { title: "Kubernetes Basics", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/", type: "docs" },
                { title: "TechWorld with Nana K8s", url: "https://www.youtube.com/watch?v=X48VuDVv0do", type: "video" }
              ]
            }
          ] 
        }
      ],
    },
  ],
};
