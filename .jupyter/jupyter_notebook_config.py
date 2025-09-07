# Force classic Notebook homepage
c = get_config()
c.NotebookApp.default_url = '/tree'

# hiding some directory items when the book is opened
c.ContentsManager.hide_globs = [
    '__pycache__', '*.pyc', '*.pyo', '.DS_Store', '*.so', '*.dylib',
    '**/.ipynb_checkpoints',
    'postBuild',       # postBuild file
    'README.md',       # GitHub repo README file
    'images',          # images folder
    'documents',       # documents folder
    'environment.yml', # environment file
]
