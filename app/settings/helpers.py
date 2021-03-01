from os import environ
from os.path import dirname, abspath


# project root
BASE_DIR = dirname(dirname(dirname(abspath(__file__))))


def env_mode():
    """
    Check if we want to be in dev mode or staging mode, this will be used to pull in correct settings overrides.
    :return bool:
    """
    if environ.get('DEV_MODE') is not None:
        return 'DEV'
    if environ.get('STAGING_MODE') is not None:
        return 'STAGING'
