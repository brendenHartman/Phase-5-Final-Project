"""added foreign keys

Revision ID: 57d89b569626
Revises: aeb1f849f06b
Create Date: 2024-11-18 18:40:48.770028

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57d89b569626'
down_revision = 'aeb1f849f06b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('enclosure_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_animals_enclosure_id_enclosures'), 'enclosures', ['enclosure_id'], ['id'])
        batch_op.create_foreign_key(batch_op.f('fk_animals_user_id_users'), 'users', ['user_id'], ['id'])

    with op.batch_alter_table('enclosures', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(batch_op.f('fk_enclosures_user_id_users'), 'users', ['user_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('enclosures', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_enclosures_user_id_users'), type_='foreignkey')
        batch_op.drop_column('user_id')

    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_animals_user_id_users'), type_='foreignkey')
        batch_op.drop_constraint(batch_op.f('fk_animals_enclosure_id_enclosures'), type_='foreignkey')
        batch_op.drop_column('enclosure_id')
        batch_op.drop_column('user_id')

    # ### end Alembic commands ###
