from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in transit_app/__init__.py
from transit_app import __version__ as version

setup(
	name="transit_app",
	version=version,
	description="Application de Transit",
	author="ADAGBE Leonel",
	author_email="adagbeleandro55@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
